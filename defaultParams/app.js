// Adding default paramater to numSides
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie());
