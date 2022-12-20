const person = {
  firstName: "Mitch",
  lastName: "Pauwels",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.lastName = "Gommers";
console.log(person.fullName());

const cat = {
  name: "Blue Steele",
  color: "Grey",
  breed: "Scottish Fold",
  meow() {
    console.log("Meeeooooow");
  },
};

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

console.log(hen.layAnEgg());
console.log(hen.eggCount);
