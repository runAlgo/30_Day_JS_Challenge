// Activity 1: ***** If-Else Statement *****

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// const checkNumberStatus = (val) => {
// if(val > 0) console.log(`Value: ${val} is positive`);
// else if(val < 0) console.log(`Value: ${val} is Negative`);
// else console.log(`Value: ${val} is Zero`);
// }
// checkNumberStatus(2)


// Task 2:- Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
// const checkValidVoter = (age) => {
//     if(age >= 18) console.log(`Congratulation🎉 you are eligible for vote. You are: ${18}`);
//     else console.log(`Sorry🙏 you are under age.`);
// }
// checkValidVoter(11)


// Activity 2:- ***** Nested If-Else Statements *****

// Tesk 3:- Write a program to find the largest of three numberes using nested if-else statements.

// const findLargestNumber = (num1, num2, num3) => {
//   if (num1 > num2 && num1 > num3) console.log(`num1 is greator`);
//   else {
//     if (num2 > num1 && num2 > num3) console.log(`num2 is greator`);
//     else if(num3 > num1 && num3 > num2) console.log(`num3 is greator`);
//     else console.log(`All three numbers:(${num1}, ${num2}, ${num3}) are equal`)
//   }
// };
// findLargestNumber(90, 90, 90);



// Activity 3:- ***** Switch Case *****

// Task 4:- Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to console.

// const chooseDay = (day) => {
// switch(day){
//     case 1: console.log("Sunday");
//     break;
//     case 2: console.log("Monday");
//     break;
//     case 3: console.log("Tuesday");
//     break;
//     case 4: console.log("Wednesday");
//     break;
//     case 5: console.log("Thursday");
//     break;
//     case 6: console.log("Friday");
//     break;
//     case 7: console.log("Saturday");
//     break;
//     default: console.log("Invalid day! choose day between 1 - 7.")
// }
// }
// chooseDay(1);


// Test 5:- Write a program that uses case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
// const checkGrade = (mark) => {
//     switch(true) {
//         case (mark >= 90 && mark <= 100): console.log("Grade: A");
//         break;
//         case (mark >= 70 && mark < 90): console.log("Grade: B");
//         break;
//         case (mark >= 60 && mark < 70): console.log("Grade: C");
//         break;
//         case (mark >= 40 && mark < 60): console.log("Grade: D");
//         break;
//         case (mark >= 0 && mark < 40): console.log("Grade: F");
//         break;
//         default: console.log("Invalid Mark! Mark between(1-100)");
//     }
// }
// checkGrade(90);



// Activity 4:- ***** Conditional (Ternary) Operator *****

// Task 6:- Write a program that uses ternary operator to check if a numbar is ever or odd and log the result to the console.
// const checkEvenOdd = (num) => {
// const res = (num % 2 == 0) ? "Even":"Odd";
// return res;
// }
// console.log(checkEvenOdd(80));



// Activity 5:- Combining Conditions

// Task 7:- Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
// const checkLeapYear = (year) => {
//     if((year % 4 === 0 && year % 100 !== 0)|| (year % 400) === 0) return true;
//     else return false;
// }
// console.log(checkLeapYear(2024));

