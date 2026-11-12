const tasks = [
  { name: "JavaScript", xp: 20, completed: true },
  { name: "TypeScript", xp: 30, completed: false },
  { name: "React", xp: 40, completed: true }
];

// Expected result: 60

function calculateTotalXP(tasks) {
  let totalXP = 0;
  for (const task of tasks) {
    if (task.completed) {
      totalXP += task.xp;
    }
  }
  return totalXP;
}

console.log(calculateTotalXP(tasks)); // Output: 60