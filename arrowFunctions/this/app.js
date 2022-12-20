// Arrowfunction with THIS
// Keyword THIS behaves differently with an arrowfunction compared to normal function

const person = {
  firstName: "Amadeus",
  lastName: "Mozart",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this.fullName());
    }, 2000);
  },
};
console.log(person.fullName());
