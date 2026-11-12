const tasks = [
  { name: "JavaScript", xp: 20, completed: true },
  { name: "React", xp: 30, completed: false },
  { name: "AWS", xp: 40, completed: true }
];

for(const {name, xp} of tasks) {
    console.log(`${name}: ${xp} XP`);
}