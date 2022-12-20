// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const newNumbers = numbers.filter((number) => {
//   return number === 4;
// });

// console.log(newNumbers);

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 1984,
  },
  {
    title: "Nothing Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1984,
  },
];

// only filters, gives all info

const movieByYear = movies.filter((movie) => {
  return movie.year > 1990;
});

const goodMovies = movies.filter((movie) => {
  return movie.score > 80;
});

const goodTitle = goodMovies.map((movie) => {
  return movie.title;
});

// Filter results and use Map to retrieve only the movie titles
const goodMovie = movies
  .filter((movie) => movie.score > 80)
  .map((movie) => movie.title);

console.log(goodMovie);
// console.log(goodTitle);
// console.log(goodMovies);
