// Functions that operate with other functions

// function callTwice(func) {
//   func();
//   func();
// }

// function callTen(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// // callTwice(rollDie);
// callTen(rollDie);

// Factory function
// Returning Function as Value
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(64, 120);
