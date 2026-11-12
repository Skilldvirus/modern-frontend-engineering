function TaskItem({ task, onToggle }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {task.title}
    </label>
  );
}

export default TaskItem;