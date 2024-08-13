// Day 8:- ES6+Features
// Tasks/Activities:
// Activity 1:- Template Literals


// Task 1:- Use template literals to create a string that includes cariables for a person's name and age, and log the string to the console.
// const name = "kalu";
// const age = 20;
// console.log(`Name: ${name}, Age: ${age}`);



// Task 2:- Create a multi-line string using template literals and log it to the console.
// const multilineString = `
//     This is a 
//     multi-liine
//     string using template literals.
// `
// console.log(multilineString);



// Destructuring

// Task 3:- Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
// const users = ["kalu", "hitesh", "dipak", "mohit"]
// const [firstElem, secondElem] = users
// console.log(
//     `
//     First Element: ${firstElem}
//     Second Element: ${secondElem}
//     `)

// Task 4:- Use object destructuring to extract the title and author from a book object and log them to the console.
// const book = {
//     title: "Js",
//     author: "Hitesh",
//     year: "2024"
// }
// const {title, author} = book;
// console.log(`
//     Title: ${title}
//     Author: ${author}
//     `)



// Activity 3:- Spread and Rest Operators
// Task 5:- Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
// const arr1 = [1, 2, 3, 4];
// const arr2 = [4, 5, 6, 7];
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)


// Task 6:- Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
// function sum(...numbers) {
//  return numbers.reduce((sum, num) => sum += num);
// }
// console.log(sum(1, 2, 3));



// Activity 4:- Default Parameters
// Task 7:- Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function without the second parameter.
// function product(num1, num2 = 1) {
//     return num1 * num2;
// }
// console.log(product(5));




// Activity 5:- Enhanced Object Literals
// Task 8:- Use enhanced object literals to create an object with methods and properties,and log the object to the console.


// const name = "puppy";
// const color = "black"
// const age = 2

// const blackDog = {name, color, age}
// const WhiteDog = {name, color: "white", age}

// console.log(blackDog)
// console.log(WhiteDog)


// Task 9:- Create an object with computed property names based on variables and log the object to the console.
const propertyName = "myProperty";
const propertyValue = [4, 5, 6, 7];

// Create an object with a computed property name
const myObject = {
    [propertyName]: propertyValue
};
console.log(myObject.myProperty);

