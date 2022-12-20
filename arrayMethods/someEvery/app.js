// variable
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// If EVERY score Element is >= than 75 = True otherwise False
exams.every((score) => score >= 75); // true
exams.every((score) => score >= 78); // false

// If SOME score Element is >= than 75 = True otherwise False
exams.some((score) => score >= 75); // True
exams.some((score) => score >= 78); // True

// Even numbers
const allEvens = (number) => number.every((num) => num % 2 === 0);
console.log(allEvens([2, 4, 6, 8])); //true
console.log(allEvens([1, 4, 6, 8])); //false
console.log(allEvens([1, 2, 3])); //false
