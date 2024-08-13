// Tasks/Activities:

// Activity 1:- Creating and Exporting Modules

// Task 1:- Create a module that exports a function to add two numbers. Import and use this module in another script.

// const add = (a, b) => {
// return a + b;
// }
// export {
//     add
// }


// Task 2:- Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// const person = {
//     firstName: "Kalu",
//     lastName: "Singh",
//     age: 21,

//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     birthday() {
//         this.age++;
//         console.log(`Happy Birthday! ${this.firstName} is now ${this.age} years old.`);
//     },

//     introduce() {
//         console.log(`Hello, I'm ${this.fullName} and I'm ${this.age} years old.`)
//     }
// }
// export {
//     person
// }



// Activity 2:- Named and Default Exports

// Task 3:- Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// const name = () => {
//     return "kalu"
// }
// const age = () => {
//     return 21;
// }
// const course = () => {
//     return "JS"
// }
// export {
//     name,
//     age,
//     course,
// }

// Task 4:- Create a module that exports a single function using default export. Import and use this function in another script.
// const multiply = (a, b) => {
// return a * b;
// }
// export default multiply;


// Activity 3:- Importing Entire Modules
// Task 5:- Create a module that exports multiple constants and functions. import the entire module as an object in another script and use its properties.
// myModule.js

// Constants
// const PI = 3.14;
// const E = 2.71;

// // Functions
// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// // Exporting constants and functions
// export {
//     PI,
//     E,
//     add,
//     multiply
// };



// Activity 4:- Using Third-Party Modules
// Task 6:- Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
// solved into importModule.js file✅


// Task 7:- Install a third-party module (e.g, axios) using npm. Import and use this module to make a network request in script.
// Solved into importModule.js file✅




// Activity 5:- Module Bundling(Optional)
// Task 8:- Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.