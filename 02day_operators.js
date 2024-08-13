// Activity 1: ******* Arithmetic Operations *****

// Task 1:- Write a program to add two numbers and log the result to the console.
// const num1 = 22;
// const num2 = 12;
// const sum = num1 + num2;
// console.log(sum);

// Task 2:- Write a program to subtract two numbers and log the result to the console.
// const num1 = 3;
// const num2 = 1;
// const difference = num1 - num2;
// console.log(difference);

// Task 3:- Write a program to mltiply two nuumbers and log the result to the console.
// const num1 = 4;
// const num2 = 3;
// const product = num1 * num2;
// console.log(product);

// Task 4:- Write a program to divide two numbers and log the result to the console.
// const num1 = 33;
// const num2 = 22;
// const divide = num1 / num2;
// console.log(divide);

// Task 5:- Write a program to find the reminder when one number is divided by another and log the result to the console.
// const num1 = 189;
// const num2 = 3;
// const reminder = (189 % 3);
// console.log(reminder);


// Activity 2: ***** Assignment Operators *****

// Task 6: Use the += operator to add a number to a variable and log thne result to the console.
// let num1 = 34;
// let num2 = 1;
// const a = num1 += num2;
// console.log(a);


// Task 7: Use the -= Operator to subtract a number from a variable and log the result to the console.
// let num1 = 34;
// let num2 = 1;
// const a = num1 -= num2;
// console.log(a);


// Activity 3:: Comparision Operators

// Task 8:- Write a program to compare two numbers using > and < and log the result to the console.
// const num1 = 3;
// const num2 = 2;
// const isNum1Greator = num1 > num2;
// const isNum1Smaller = num1 < num2;
// console.log(isNum1Greator, isNum1Smaller);

// Task 9:- Write a program to compare two numbers using >= and <= and llog the result to the console.
// const num1 = 3;
// const num2 = 2;
// const isNum1Greator = num1 >= num2;
// const isNum1Smaller = num1 <= num2;
// console.log(isNum1Greator, isNum1Smaller);

// Task 10:- Write a program to compare two numbers using == and === and log the result to the console.
// const num1 = "22";
// const num2 = 22;
// console.log(num1 == num2);
// console.log(num1 === num2);


// Activity 4:- ***** Logical Operator ******

// Task 11:- Write a program that uses the && operator to combine two conditions and log the result to the console.
// const num1 = 2;
// const num2 = 3;
// if(num1 >= 1 && num2 <= 3) {
//     console.log(num1);
// }else{
//     console.log("Condition not match! Check your code again...")
// }


// Task 12:- Write a program that uses the || operator to combine two conditions and log the result to the console.
// const num1 = 2;
// const num2 = 3;
// if(num1 >= 1 || num2 <= 3) {
//     console.log(num1);
// }else{
//     console.log("Condition not match! Check your code again...")
// }


// Task 13:- Write a program that uses the  !  operator to negate a condition and log the result to hte console.
// function isPositive(num) {
//     return num > 0;
// }
// const num = -4;
// const check = !isPositive(num);
// console.log(check)



// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

// let age = 18;
// const isVote = (age >= 18) ? "vote": "not for vote"
// console.log(isVote);


//1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, reminder) on two numbers and logs the results.
// Function to perform basic arithmetic operations
// function performArithmeticOperations(num1, num2) {
//     let addition = num1 + num2;
//     let subtraction = num1 - num2;
//     let multiplication = num1 * num2;
//     let division = num1 / num2;
//     let remainder = num1 % num2;

//     console.log(`Addition of ${num1} and ${num2} is: ${addition}`);
//     console.log(`Subtraction of ${num1} and ${num2} is: ${subtraction}`);
//     console.log(`Multiplication of ${num1} and ${num2} is: ${multiplication}`);
//     console.log(`Division of ${num1} and ${num2} is: ${division}`);
//     console.log(`Remainder when ${num1} is divided by ${num2} is: ${remainder}`);
// }
// let num1 = 10;
// let num2 = 4;
// performArithmeticOperations(num1, num2);



//2. Comparison and Logical Operators Script: Create a script that compares tow numbers using different comparison operators and combines conditons using logical operators, logging the results. in javascript
    // Function to compare two numbers
// function compareNumbers(num1, num2) {
//     console.log(`Comparing ${num1} and ${num2}:`);

//     // Comparison operators
//     console.log(`${num1} == ${num2}: ${num1 == num2}`);
//     console.log(`${num1} === ${num2}: ${num1 === num2}`);
//     console.log(`${num1} != ${num2}: ${num1 != num2}`);
//     console.log(`${num1} !== ${num2}: ${num1 !== num2}`);
//     console.log(`${num1} > ${num2}: ${num1 > num2}`);
//     console.log(`${num1} < ${num2}: ${num1 < num2}`);
//     console.log(`${num1} >= ${num2}: ${num1 >= num2}`);
//     console.log(`${num1} <= ${num2}: ${num1 <= num2}`);

//     // Logical operators
//     console.log(`(${num1} > 0) && (${num2} > 0): ${(num1 > 0) && (num2 > 0)}`);
//     console.log(`(${num1} > 0) || (${num2} > 0): ${(num1 > 0) || (num2 > 0)}`);
//     console.log(`!(${num1} > 0): ${!(num1 > 0)}`);
// }

// // Example usage
// let num1 = 5;
// let num2 = 10;
// compareNumbers(num1, num2);

//3. Ternary Operater Script: Write a script that uses the teranry operator to determine if a number is positive or negative and logs the result.
// Function to determine if a number is positive or negative
function checkNumber(number) {
    let result = (number >= 0) ? "positive" : "negative";
    console.log(`The number ${number} is ${result}.`);
}

// Example usage
let number = -5;
checkNumber(number);
