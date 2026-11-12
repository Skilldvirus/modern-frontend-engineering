
function TaskTracker() {
  const [tasks, setTasks] = useState([
     { id: 1, name: "Angular", completed: false },
        { id: 2, name: "React", completed: false },
        { id: 3, name: "AWS", completed: true }
  ]);

  const toggleTaskCompletion = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter(task => task.completed).length;




  return (
    <div>
        {tasks.map(task => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.name}</span>
            <TaskTracker task={task} onToggle={toggleTaskCompletion} />
            <p>Completed: {completedCount}  </p>
          </div>
        ))}
    </div>
  );
}