// const subRedits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];
// let nestedArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // for (let i = 0; i < subRedits.length; i++) {
// //   console.log(`www.subredits.com/r/${subRedits[i]}`);
// // }

// for (let title of subRedits) {
//   console.log(`www.subredits.com/r/${title}`);
// }

// for (let row of nestedArr) {
//   for (let number of row) {
//     console.log(number);
//   }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let square of numbers) {
  console.log(typeof square);
  console.log(Math.pow(square, 2));
}
