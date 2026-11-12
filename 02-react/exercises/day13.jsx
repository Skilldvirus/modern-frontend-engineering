function TaskCard({ task, onToggle }) {
  return (
    <div>
      <h2>{task.name}</h2>
      const statusText = task.completed ? "Completed" : "Pending";
      const buttonText = task.completed ? "Mark Pending" : "Mark Complete";
      <p>{statusText}</p>
      <button onClick={() => onToggle(task.id)}>
        {buttonText}
      </button>
    </div>
  );
}