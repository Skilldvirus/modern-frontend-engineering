const tasks = [
  { name: "JavaScript practice", completed: true },
  { name: "React practice", completed: false },
  { name: "XP summary", completed: true }
];

const completedTasks = [];

for (const task of tasks) {
     if(task.completed) {
        completedTasks.push(task);
     }
  // Add only completed tasks to completedTasks
}

// Build a tiny task summary using the tasks array above. Your program should:
// - Count how many tasks are completed.
// - Count how many are pending.
// - Print both counts clearly.


const completedCount = completedTasks.length;
const pendingCount = tasks.length - completedCount;

console.log(`Completed tasks: ${completedCount}`);
console.log(`Pending tasks: ${pendingCount}`);

console.log(completedTasks);