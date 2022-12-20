const user = {
  email: "newuser@gmail.com",
  password: 1234,
  firstName: "Catherine",
  lastName: "Jones",
  born: 1966,
  died: 2060,
  bio: "Lived long, died like a champ",
  city: "Bristol",
  State: "State of Bristol",
};

const firstName = user.firstName;
const lastName = user.lastName;
// Destructuring creates new value's with their respective value
const { email, password, bio } = user;
// Giving your own value names
// -> favoritMusic received the 'default' value of "Rock"
const { email: mail, password: security, favoriteMusic = "Rock" } = user;

console.log(firstName);
console.log(lastName);
// console.log(email, password, bio);
console.log(mail, security, favoriteMusic);
