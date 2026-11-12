import TaskItem from "./taskItem";

function TaskList({ tasks, onToggle }) {

  if (!tasks || tasks.length === 0) {

    return (
    <div style={{ textAlign: "center", marginTop: "20px" }} className="no-tasks-message"  >
      <h3 style={{ color: "#888" }}>No tasks available.</h3>
      <p> Add a new task to get started.</p>
    </div>
    )
  }
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TaskList;