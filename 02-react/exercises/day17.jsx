import { useState } from "react";
const   taskArr =[
  { id: 1, title: "React", completed: false },
  { id: 2, title: "Angular", completed: true },
  { id: 3, title: "AWS", completed: false }
];

function TaskTracker() {
    const  [tasks, setTasks] = useState(taskArr);
    const [input,setInput] = useState("");

    function addTask() {
        if(input.trim() === "") return;
        const newTask = {
            id: Date.now(),
            title: input,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setInput("");
    }

    function toggleTaskCompletion(taskId) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const completedCount = tasks.filter(task => task.completed).length;
    const pendingCount = tasks.length - completedCount;

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
            <p>Total Tasks: {tasks.length} </p>
            <p>Completed: {completedCount}</p>
            <p>Pending: {pendingCount}</p>
        </div>
    );
}
