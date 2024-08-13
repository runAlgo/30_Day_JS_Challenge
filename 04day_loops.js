// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop
// const printNumbers = () => {
//     for(let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }
// printNumbers();

// Task 2: Write a program to print the multiplication table of 5 using a for loop..
// const multiply = (n) => {
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n*i}`);
//     }
// }
// multiply(5);



// Activity 2:- While Loop
// Task 3:- Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
// const calculateSum = (n) => {
//     let sum = 0;
//     while(n) {
//         sum += n;
//         n--;
//     }
//     return sum;
// }
// console.log(calculateSum(10));


// Task 4:- Write a program to print numbers from 10 to 1 using a while loop.
// const printNumbers = (n) => {
//     while(n) {
//         console.log(n);
//         n--;
//     }
// }
// printNumbers(10);


// Activity 3:- Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using do...while loop.
// const printNumbers = (n) => {
//     let i = 1;
//     do{
//         console.log(i);
//         i++;
//         n--;
//     }while(n);
// }
// printNumbers(5);

// Task 6:- Write a program to calculate the factorial of a number using a do...while loop.
// const findFactorial = (n) => {
//     let sum = 1;
//     do {
//         sum += sum * (n - 1);
//         n--;
//     }while(n);
//     return sum;
// }
// console.log(findFactorial(5));



// Activity 4:- Nested Loops
// Task 7:- Write a program to print a pattern using nested for loops:
// const printStar = (height) => {
//     for(let i = 1; i <= height; i++) {
//         let stars = '';
//         for(let j = 0; j < i; j++) {
//             stars += '* ';
//         }
//         console.log(stars.trim());
//     }
// }
// printStar(5);



// Activity 5:- Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue
// const printAndSkipNumber = (n) => {
//     let i = 1;
//     while(i <= 10) {
//         if(n === 5){
//             i++;
//             continue;
//         }
//         console.log(i);
//         i++;
//     }
// }
// printAndSkipNumber(10);


// Task 9:- Write a program to print numbers from 1 to 10, but stop the loop when the numbers is 7 using the break statement.

const stopLoop = (stop) => {
    let i = 1;
    while(i <= 10) {
        if(i === 7) break;
        console.log(i);
        i++;
    }
}
stopLoop(7);