const cats = ["Pluto", "Jupiter", "Amidala"];
const dogs = ["Dixie", "Shadow"];

// Copy Arrays into AllPets
let allPets = [...cats, ...dogs];
console.log(allPets);

// You can add multiple things together
allPets = [...cats, ...dogs, 123, "Speedy"];
console.log(allPets);

// Splits array into seperate chars and transform into Array
const firstName = "Mitch";
const lastName = "Pauwels";

const fullName = [...firstName, ...lastName];
console.log(fullName);
