import { useState, useEffect, useCallback } from "react";
import TaskList from "./taskList";
import TaskSummary from "./taskSummary";
import mockFetchTasks from "./mockService";

const taskArr = [
  { id: 1, title: "React", completed: false },
  { id: 2, title: "Angular", completed: true },
  { id: 3, title: "AWS", completed: false }
];

async function fetchTasks() {
  try {
    const tasks = await mockFetchTasks();
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  //   try {
  //     const storedTasks = localStorage.getItem("tasks");
  //     console.log("Loaded from localStorage:", storedTasks);
  //     return storedTasks ? JSON.parse(storedTasks) : [];
  //   } catch (error) {
  //     console.error("Error parsing tasks from localStorage:", error);
  //     return taskArr;
  //   }
  // });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const fetchedTasks = await fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      setError("Failed to fetch tasks.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // useEffect(() => {
  //   try {
  //     const taskString = JSON.stringify(tasks);
  //     localStorage.setItem("tasks", taskString);
  //   } catch (error) {
  //     console.error("Error saving tasks to localStorage:", error);
  //   }
  // }, [tasks]);

  function addTask(input) {
    const trimmedInput = input.trim();
    if (trimmedInput === "") return;

    const newTask = {
      id: Date.now(),
      title: trimmedInput,
      completed: false
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  }

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
        ? tasks.filter((task) => !task.completed)
        : tasks.filter((task) => task.completed);

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <>
      <h1>Task Tracker</h1>

      {loading ? (
        <p>Loading tasks...</p>
      ) : error ? (
        <>
          <p>Error loading tasks: {error}</p>
          <button onClick={loadTasks} disabled={loading}>
            Retry
          </button>
        </>
      ) : tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <>
          <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>
              Completed
            </button>
          </div>

          <TaskList tasks={filteredTasks} onToggle={toggleTask} />
        </>
      )}

      <hr />

      <label htmlFor="taskInput">Add a new task:</label>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task title"
        id="taskInput"
      />

      <button type="button" onClick={() => addTask(input)}>
        Add Task
      </button>

      <TaskSummary completedCount={completedCount} />
    </>
  );
}

export default TaskTracker;
