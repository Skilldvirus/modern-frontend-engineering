const tasks = [
  { id: 1, name: "JavaScript", xp: 20, completed: true },
  { id: 2, name: "React", xp: 60, completed: false },
  { id: 3, name: "TypeScript", xp: 40, completed: true }
];


function TaskCard({ taskName, taskXp, completed }) {
  return (
    <div>
      <h2>{taskName}</h2>
      <p>XP: {taskXp}</p>
      <p>{completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

function Tasklist() {
  return (

        tasks.map(task => (
        <div key={task.id}>
            <TaskCard taskName={task.name} taskXp={task.xp} completed={task.completed} />
        </div>
  ))
  );
}
