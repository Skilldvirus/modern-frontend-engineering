const tasks = [
  { name: "JavaScript practice", xp: 20 },
  { name: "Coding exercise 1", xp: 30 },
  { name: "Coding exercise 2", xp: 30 }
];

tasks.push({ name: "Coding exercise 3", xp: 40 });

// Display each task with its XP
const taskSummary = tasks.map(task => {
  return `${task.name}: ${task.xp} XP`;
});

// Calculate the total XP
const totalXP = tasks.reduce((total, task) => {
  return total + task.xp;
}, 0);



console.log(taskSummary);
console.log("Total XP:", totalXP);