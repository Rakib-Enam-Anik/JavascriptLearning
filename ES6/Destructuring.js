//destructuring
//array destructuring

var numbers = [1, 2, [3, 100, 500], 4, 6];

var [, ,[, a, b]] = numbers;

console.log(a, b);