// Tasks/Activities:

// Task 1:- Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

// const factorialOfNumber = (n) => {
//     if(n <= 1) return 1;
//     return n * factorialOfNumber(n - 1);
// }
// const fact = factorialOfNumber(6);
// console.log(fact)

// Task 2:- Write a recursive function to calculate the n'th Fibonacci number. Log the result for a few test cases.

// const nFibonacciNumber = (n) => {
//     if(n <= 1) return n;

//     let prev = 0;
//     let curr = 1;
//     return nFibonacciNumber(
//         prev + curr
//     )

// }
// console.log(nFibonacciNumber(6));

// const fibonacciNumber = (n) => {
//     if(n <= 1) return n;

//     return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
// }
// console.log(fibonacciNumber(5));

// Activity 2:- Recursion with Arrays

// Task 3:- Reverse the array
// const reverseArr = (l, r, arr) => {
//     if(l >= r) return;

//     // Swap elements
//     [arr[l], arr[r]] = [arr[r], arr[l]];
//     reverseArr(l+1, r-1, arr);
//     return arr;
// }
// const arr = [2, 4, 6, 9, 8];
// let n = arr.length;
// console.log(reverseArr(0, n - 1, arr));

// Task 4:- Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

// function sumArray(arr, index = 0) {
//     if(index === arr.length) return 0;

//     return arr[index] + sumArray(arr, index + 1);
// }
// // Test cases
// const arr1 = [1, 2, 3, 4, 5];
// console.log(sumArray(arr1));

// Task 5:- Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

// const findMaxElem = (arr, index = 0) => {
// if(index === arr.length - 1) return arr[index];

// const maxSoFar = findMaxElem(arr, index + 1)
// return Math.max(arr[index], maxSoFar)
// }
// const arr = [2, 3, 5, 9, 8];
// console.log(findMaxElem(arr));

// *** Without recursion ***

// function findMax(arr) {
// if(arr.length === 0) return undefined; // Handle empty array as needed

// let max = arr[0];

// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
// }
// return max;
// }
// const arr = [3, 5, 6, 7, 8];
// console.log(findMax(arr))

// Activity 3:- String Manipulation with Recursion

// Task 6:- Write a recursive function to reverse a string. Log the result for a few test cases.
// function reverseString(str) {
//     // Base case: empty string 
//     if(str === "") {
//         return "";
//     }
//     // Recursive case
//     return reverseString(str.substring(1)) + str.charAt(0);
// }
// // Example usage
// const string = "hello";
// const reversedString = reverseString(string);
// console.log(reversedString); // Output: "olleh"

// Task 7:- Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function checkPalindromeString(i, n, str) {
    // Base case
    if(i >= n / 2) return true;
    
    if(str[i] != str[n - i - 1]) return false;
    return checkPalindromeString(i + 1, n, str);
}
const str = "MADAM";
const n = str.length;
console.log(checkPalindromeString(0, n, str))