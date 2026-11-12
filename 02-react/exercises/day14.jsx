function TaskSummary({ tasks }) {
  // Your calculations go here
    const completedCount = tasks.filter(task => task.completed).length;
    const pendingCount = tasks.length - completedCount;
  return (
    <div>
      <p>Completed: {completedCount}</p>
      <p>Pending: {pendingCount}</p>
    </div>
  );
}