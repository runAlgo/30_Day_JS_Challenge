// Day 6: Arrays
// Tasks/Activities:
//Activity 1:- Array Craeation and Access
// Task 1:- Create an array of numbers from 1 to 5 and log the array to the console.
// const createArray = () => {
//     const arr = [1, 2, 3, 4, 5];
//     for(let i = 0; i <= arr.length -1; i++) {
//         console.log(arr[i]);
//     }
// }
// createArray();


// Task 2:- Access the first and last elements of the array and log them to the console.
// const accessFirstAndLastElem = (arr) => {
// const size = arr.length;
// const lastElem = arr[size - 1];
// const firstElem = arr[0];
// console.log(`First elem: ${firstElem}, Last elem: ${lastElem}`)
// }
// accessFirstAndLastElem([1, 2, 3, 4])



// Activity 2: Array Methods(Basic)

// Task 3: Use the (push) method to addd a new number to the end of the array and log the updated array.
// const addNumberAtEnd = (num) => {
// const arr = [1, 2, 3, 4];
// console.log("Before", arr);

// arr.push(num);
// console.log("After", arr);
// }
// addNumberAtEnd(5)


// Task 4:- Use the (pop) method to remove the last element from the array and log the updated array.
// const removeLastElem = (arr) => {
//    arr.pop();
//    console.log(arr)
// }
// removeLastElem([1,2,3,4,5]);

// Task 5:- Use the (shift) method to remove the first element from the arrat and log the updated array.
// const removeFirstElem = (arr) => {
// arr.shift();
// console.log(arr);
// }
// removeFirstElem([1, 2, 3, 4, 5]);


// Task 6:- Use the (unshift) method to add a new number to the beginning of the array and log the updated
// const addBegin = (arr) => {
// arr.unshift(0);
// console.log(arr);
// }
// addBegin([1, 2, 3, 4]);




// Activity 3:- Array Methods (Intermediate)

// Task 7:- Use the (map) method to create a new array where each number is doubled and log the new array.
// const doubleNumberUsingMap = (arr) => {
//     const res = arr.map((value) => value + value)
//     return res;
// }
// console.log(doubleNumberUsingMap([1, 2, 3, 4]));


// Task 8:- Use the (filter) method to create a new array with only even numbers and log the new array.
// const findEvenUsingfilter = (arr) => {
//     const res = arr.filter((value) => value % 2 === 0)
//     return res;
// }
// console.log(findEvenUsingfilter([1, 2, 4, 5, 6, 7, 8]));


// Task 9:- Use the (reduce) method to calculate the sum of all numbers in the array and log the result.
// const findSumUsingReduce = (arr) => {
//    let sum =  arr.reduce((sum = 0, num) => {
//         return sum += num;
//     })
//     return sum;
// }
// console.log(findSumUsingReduce([1, 2, 3, 4, 5]));





// Activity 4:- Array Iteration
// Task 10:- Use a (for) loop to iterate over the array and log each element to the console.
// const ArrayIterate = (arr) => {
//     for(i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// ArrayIterate([1, 2, 3, 4]);


// Task 11:- Use a (forEach) method to iterate over the array and log each element to the console.
// const forEach = (arr) => {
//     arr.forEach((val) => {
//         console.log(val);
//     })
   
// }
// forEach([1, 2, 3, 4]);




// Activity 5:- Multi-dimensional Array
// Task 12:- Create a two-dimensional array (matrix) and log the entire array to the console.

// const matrix= [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [3, 5, 7, 4]
// ]
// console.log(matrix);


// Task 13:- Access and log a specific element from the two-dimensional array;

// const twoDiArray = [
//     ["laxman", "chai", "harry"],
//     ["hitesh", "kushal", "ranvir"],
//     ["ritesh", "yadav", "nirajan"]
// ];

// const friend1 = twoDiArray[0][0];
// const friend2 = twoDiArray[1][0];
// console.log(`First Friend: ${friend1},
// Second Friend: ${friend2}`);



