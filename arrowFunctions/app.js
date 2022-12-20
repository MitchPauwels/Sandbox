const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(6, 7));

// Implicit Return =>()
// Only works if you return 1 thing
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 2));

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

const movieDB = movies.map((movie) => `${movie.title} ${movie.score}/100`);

console.log(movieDB);
console.log(typeof movieDB);
