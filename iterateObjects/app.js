const myObject = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  evlira: 97,
  diedre: 81,
  vonnie: 60,
};
// For.. IN -> itterate objects
// for (let person in myObject) {
//   console.log(`${person} scored ${myObject[person]}`);
// }
// Method to transform OBJ into Array
Object.keys(myObject);
Object.values(myObject);
Object.entries(myObject);

let total = 0;
// Turn into array of values
let scores = Object.values(myObject);
// For... Of because it's an array
for (let score of scores) {
  total += score;
}

console.log(scores);
console.log(total);
console.log(total / scores.length);
