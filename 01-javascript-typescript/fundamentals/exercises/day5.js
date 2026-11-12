const tasks = [
  { name: "JavaScript practice", completed: true },
  { name: "React practice", completed: false },
  { name: "TypeScript practice", completed: true },
  { name: "AWS practice", completed: false },
  { name: "Interview practice", completed: true }
];

let completedCount = 0;
let pendingCount = 0;

for (const task of tasks) {
  if (task.completed) {
    completedCount++;
  } else {
    pendingCount++;
  }
}

console.log("Completed tasks:", completedCount);
console.log("Pending tasks:", pendingCount);
