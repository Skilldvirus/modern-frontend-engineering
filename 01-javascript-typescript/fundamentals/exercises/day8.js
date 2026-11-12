const tasks = [
  { name: "JavaScript", xp: 20 },
  { name: "TypeScript", xp: 30 },
  { name: "React", xp: 40 }
];

function processTasks(tasks, callback) {
  for (const task of tasks) {
    callback(task);
  }
}

processTasks(tasks, console.log);