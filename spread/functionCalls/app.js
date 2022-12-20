//Arrays
// const max = Math.max(1, 2, 3, 4, 5);
// console.log(max);

// // Does not work with an array
// const maximum = [1, 2, 3, 4, 5];
// console.log(Math.max(maximum)); // NaN
// // Works with Spread
// console.log(Math.max(...maximum)); // 5
// console.log(...maximum);

// Strings
// const str = "Hello";
// console.log(...str);

// const str2 = ("hello", "how", "are", "you");
// console.log(str2); // takes last element

// const str3 = "12 30 45 60";
// console.log(...str3);
// console.log(Math.max(...str3));

const maxi = ("1", "20", "3", "2"); // only looks at the last element, won't be able to take the max out
console.log(Math.max(maxi));
console.log(Math.max(...maxi));
console.log(...maxi);
