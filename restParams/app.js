//  Rest collects everything you have put in as parameter and stores it into and array.
// DOES NOT WORK IN ARROW FUNCTIONS!!!
function sum(...nums) {
  return nums.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4, 5));

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`Silver MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

console.log(raceResults("Mitch", "Micky", "Ronny", "Ilona", "Colin"));
