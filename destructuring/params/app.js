const person = {
  firstName: "Mitch",
  lastName: "Pauwels",
};
// without deconstructuring
// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// with deconstructuring
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(fullName(person));

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

// Deconstructure in paramater
console.log(
  movies.map(({ title, score }) => {
    return `${title} ${score}`;
  })
);
