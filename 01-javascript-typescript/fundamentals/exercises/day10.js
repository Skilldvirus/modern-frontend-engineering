const tasks = [
  { name: "JavaScript", xp: 20 },
  { name: "TypeScript", xp: 60 },
  { name: "React", xp: 120 }
];

function printTaskReport(tasks){
    for(const {name, xp} of tasks) {
        console.log(`${name}: ${xp} XP (${getXPLevel(xp)})`);
    }
}
function getXPLevel(xp) {
  if (xp >= 100) {
    return "Advanced";
  } else if (xp >= 50 && xp < 100) {
    return "Intermediate";
  } else {
    return "Beginner";
  }
}