// console.log("FIRST!!!");
// setTimeout(() => {
//   console.log("Are you still here??");
// }, 3000);
// console.log("SECOND!!!");

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

clearInterval(id); // This would stop the interval
