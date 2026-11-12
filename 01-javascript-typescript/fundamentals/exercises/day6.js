function calculateXP(currentXP, earnedXP) {
    return currentXP + earnedXP;
  // Write your logic here
}

console.log(calculateXP(100, 25)); // 125
console.log(calculateXP(200, 50)); // 250


function getXPLevel(xp) {
    if (xp >= 100) {
        return "Advanced";
    } else if (xp >= 50) {
        return "Intermediate";
    } else {
        return "Beginner";
    }
  // Write your if / else if / else logic
}

console.log(getXPLevel(120)); // Advanced
console.log(getXPLevel(75));  // Intermediate
console.log(getXPLevel(20));  // Beginner