// copy properties from one object into another object literal
const feline = {
  legs: 4,
  family: "Felidae",
};
const canine = {
  isFurry: true,
  family: "Caninae",
};
// IMPORTANT = This feature gets used A LOT!
// Create new object -> canine overrides feline because of order.
const animals = { ...feline, ...canine, color: "black" };
console.log(animals);

// Spread array into object
const arrayInObj = { ...[2, 4, 6, 8] };
// console.log(arrayInObj);

// Spread String into object
const strInObj = { ..."Hello" };
console.log(strInObj);

//Example why this is very usefull :
// Data from user -> registerting from website
const dataFromForm = {
  email: "bluemanga@gmail.com",
  password: "donthackme123",
  username: "tfunkie",
};

// Adding unique ID and if admin=true/false
const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
