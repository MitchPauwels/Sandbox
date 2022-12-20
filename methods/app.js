const math = {
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
  sumArray: function (arr) {
    let result = 0;
    for (let number of arr) {
      result += number;
    }
    return result;
  },
};

// Newer way of writing
const newMath = {
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
  square(number) {
    return number * number;
  },
};

console.log(math.multiply(5, 5));
console.log(math.divide(15, 5));
console.log(math.square(5));
console.log(math.sumArray([1, 2, 3, 4, 5, 5]));
console.log(newMath.multiply(6, 6));

const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

console.log(square.area(5));
console.log(square.perimeter(5));
