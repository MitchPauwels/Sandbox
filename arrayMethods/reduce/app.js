// Array of movies
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
// Array of numbers
const score = [10, 20, 30, 40, 5];

// Sum of all numbers
const sum = (array) =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Get the minimum value
const minimum = score.reduce((min, price) => {
  if (price < min) {
    return price;
  } else {
    return min;
  }
});
// Get the minimum value
const minValue = (array) =>
  array.reduce((acc, current) => {
    if (current < acc) {
      return current;
    } else {
      return acc;
    }
  });
// Get the maximum value
const maxValue = (array) =>
  array.reduce((acc, current) => {
    if (current > acc) {
      return current;
    } else {
      return acc;
    }
  });

// Get the movie with the best score
const theBestMovie = movies.reduce((bestMovie, currentMovie) => {
  if (currentMovie.score > bestMovie.score) {
    return currentMovie;
  } else {
    return bestMovie;
  }
});

console.log(minValue(score));
console.log(maxValue(score));
console.log(minimum);
console.log(theBestMovie.title);
