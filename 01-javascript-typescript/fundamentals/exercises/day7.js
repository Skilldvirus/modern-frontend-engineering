const tasks = [
  { name: "JavaScript", completed: true, xp: 20 },
  { name: "React", completed: false, xp: 30 },
  { name: "TypeScript", completed: true, xp: 25 },
  { name: "AWS", completed: false, xp: 40 }
];

function getTaskSummary(tasks) {
  let completedCount = 0;
  let pendingCount = 0;
  let earnedXP = 0;

  // Loop through tasks and update the counters
  for (const task of tasks) {
    if (task.completed) {
      completedCount++;
      earnedXP += task.xp; // Add XP for completed tasks
    } else {
      pendingCount++;
    }
  }

  return {
    completedCount,
    pendingCount,
    earnedXP
  };
}