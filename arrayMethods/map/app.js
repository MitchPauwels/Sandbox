// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// // Copies array ->
// // -> executes function
// // -> return value
// const doubles = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubles);

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

const movieTitle = movies.map(function (movie) {
  return movie.title;
});

const movieRating = movies.map(function (movie) {
  return movie.score;
});

const movieDB = movies.map(function (movie) {
  return `${movie.title} ${movie.score}/100`;
});

console.log(movieTitle);
console.log(movieRating);
console.log(movieDB);

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

// Write your code here
const firstNames = fullNames.map(function (name) {
  return name.first;
});
