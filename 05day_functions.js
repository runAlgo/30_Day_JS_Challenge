// Tasks/Activities:
// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
// const checkEvenOdd = (number) => {
//     if(number % 2 === 0) return "Even";
//     return "Odd";
// }
// console.log(checkEvenOdd(13));

// Tasks 2:- Write a function to calculate the square of a number and return the result.
// const getSquareRoot = (number) => {
//     return (number * number);
// }
// console.log(getSquareRoot(5));

// Activity 2:- Function Expression
// Task 3:- Write a function expression to find the maximum of two numbers and log the result to the console.
// const findMaxMin = (num1, num2) => {
//     const res = (num1 > num2) ? `${num1} is Max Num`: `${num2} is Max Num`;
//     return res;
// }
// console.log(findMaxMin(3, 5));

// Task 4:- Write a function expression to concatenate two string and return the result.
// const concateString = (string1, string2) => {
//     let concatStr = (string1 + string2)
//     return concatStr;
// }
// console.log(concateString("Chai", "Code"));

// Activity 3:- Arrow Functions
// Task 5:- Write an arrow function to calculate the sum of two numbers and return result.
// const sumOfTwoNumbers = (num1, num2) => {
//     return (num1 + num2);
// }
// console.log(sumOfTwoNumbers(5, 6));

// Task 6:- Write an arrow function to check if a string contains a specific character and return a boolean value;
// const checkSpecificCharacterContain = (stringVal, character) => {
//     for(let i = 0; i < stringVal.length; i++) {
//         if(stringVal[i] === character) return true;
//     }
//     return false;
// }
// console.log(checkSpecificCharacterContain("Chai", "C"));

// Activity 4:- Function Parameters and Default Values
// Task 7:- Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
// const product = (num1, num2 = 2) => num1 * num2;
// console.log(product(2, 5));
// console.log(product(3));

// Task 8:- Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
// const greeting = (name, greet = "Welcome to Javascript Challenge") => {
//     return `${greet} ${name}`;
// }
// console.log(greeting("Kalu"));

// Activity 5:- Higher-Order Functions
// Task 9:- Write a higher-order function that takes a function and a number, and calls the function that many times.
// const higherOrderFunction = (func, times) => {
//     for(let i = 0; i < times; i++) {
//         func();
//     }
// }
// const multiply = () => console.log("Chai aur code.")
// higherOrderFunction(multiply, 3);

// Multiply using higher order funciton
// const multiply = (func, num) => {
//     for(i = 1; i <= num; i++) {
//         console.log(`5 x ${i} = ${product() * i}`)
//     }
// }
// const product = () => 5;
// multiply(product, 10);

// Task 10:- Write a higher-order funciton that takes two funtions and value, applies the first function to the value, and then applies the second function to the result.
// const higherOrderFunction = (function1, funciton2, value) => {
//   let res = value ? `${yourAge() + value}` : "your age not provided";
//   if (res) {
//     return `${yourName()} ${res}`;
//   }
//   return "Something went wrong!";
// };

// const yourAge = () => "your age is:";
// const yourName = () => "Kalu";
// console.log(higherOrderFunction(yourAge, yourName, 22));

// Next one Higher order function
const applyFunctions = (func1, func2, value) => func2(func1(value));

// Example usage:
const double = x => x * 2;
const square = x => x * x;

const result = applyFunctions(double, square, 3);
console.log(result); // Output: 36 (double(3) = 6, square(6) = 36)
