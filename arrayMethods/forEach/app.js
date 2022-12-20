// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function print(element) {
//   console.log(element);
// }

// numbers.forEach(print);

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// // numbers.forEach(function (el) {
// //   console.log(el);
// // });

// for (let el of numbers) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// }

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand by Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// for (let movie of movies) {
//   console.log(`${movie.title} ${movie.score}/10`);
// }

movies.forEach(function (movie) {
  console.log(`${movie.title} ${movie.score}/10`);
});
