// Adding return so you can store the value

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return false;
//   }
//   let sum = x + y;
//   return sum;
// }

// // console.log(add(5, 5));
// let mySum = add(5, "5");
// console.log(mySum);

// // DEFINE YOUR FUNCTION BELOW:
// function lastElement(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   return arr[arr.length - 1];
// }

// console.log(lastElement([]));

// // DEFINE YOUR FUNCTION BELOW:
// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

// console.log(capitalize("mitch"));

// // DEFINE YOUR FUNCTION BELOW:
// function sumArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3]));

// DEFINE YOUR FUNCTION BELOW:
function returnDay(number) {
  if (number < 1 || number > 7) {
    return null;
  }
  let days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  return days[number];
}

console.log(returnDay(3));
