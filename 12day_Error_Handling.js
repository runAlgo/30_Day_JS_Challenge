// Tasks/Activities:

// const { fileFromSync } = require("node-fetch");

// Activity 1: Basic Error Handling with Try-Catch

// Task 1:- Write a function that intentionally throw an error and use a try-catch block to handle the error and log an approprioate message to the console.

// function throwError() {
//     throw new Error("This is an intentional error");
// }

// function handleError() {
//     try {
//         // Call the function that throws on error
//         throwError();
//     }catch(error) {
//         // Handle the error and log an appropriate message
//         console.error("An error occured:", error.message);
//     }
// }
// // Call the function to see the error handling in action
// handleError();




// Task 2:- Create  a function that divides two numbers and throw an error if the denominator is zero. Use a try-catch block to handle this error.
// const handleError = (numerator, denominator) => {
//     try {
//          if(denominator === 0) throw Error("Denominator is zero!!!");
//          const result = numerator / denominator;
//          return result;
//         }
//         catch (error) {
//         console.error("An error occured", error);
//         return null; // Return  a meaningful value in case of error.
//     }
// }
// const result = handleError(12, 0);
// console.log("Result:",result)





// Activity 2:- Finally Block

// Task 3:- Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

// const finallyBlock = () => {
//     try {
//         console.log("Entering try block.");
//         // Intentionally causing an error by calling an undefined function
//         undefinedFunction();
//         console.log("This message will not be logged");
//     } catch (error) {
//         console.log("Error caught:", error.message);
//     } finally {
//         console.log("Entering finally block")
//     }
// }
// finallyBlock();




// Activity 3:- Custom Error Objects
// Task 4:- Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// class customError extends Error {
//     constructor(message) {
//         super(message); // Call the parent class constructor
//         this.name = 'CustomError'; // Set the error name
//     }
// }

// Function that throws an instance of the custom error

// function riskyFunction() {
//     throw new customError("Something went wrong in riskyFunction!");
// }

// Handling the custom error using try-catch
// try {
//     riskyFunction();
// } catch (error) {
//     if(error instanceof customError) {
//         console.log("Cought a CustomError:", error.message);
//     }else {
//         console.log("Caught an unexpected error:", error.message);
//     }
// } finally {
//     console.log("Execution completed.");
// }




// Task 5:-  Write a function that validates user input (e.g., checking if a string is not empty) and throw a custom error if the validation fails. Handle the custom error using a try-catch block.
// Custom Error Class

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError"
//     }
// }

// function checkString(input) {
//     if(!input || input.trim() === "") {
//         throw new ValidationError("Input is empty!");
//     }
//     return `Input is: ${input}`;
// }


// try {
//     const data = checkString("")
//     console.log(data);

// } catch (error) {
//     if(error instanceof ValidationError) {
//         console.log(`Validation Error: ${error.message}`);
//     }
// }





// Activity 4:- Error Handling in Promises
// Task 6:- Create a promise that randomly resolves or rejects. Use (.catch()) to handle the rejection and log an appropriate message to the console.

// const promise = new Promise((resolve, reject) => {
//  const randomValue = Math.random();
//  if(randomValue > 0.5) {
//     resolve("Promise resolved successfully!");
//  }else {
//     reject("Promise rejected!");
//  }
// });
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error)
// })



// Task 7:- Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// const randomPromise = () => {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();
//             if(random > 0.5) {
//                 resolve('Promise resolved!')
//             }else {
//                 reject("Promise rejected!")
//             }
//     })
// }

// Acync function to handle the promise
// const handlePromise = async() => {
//     try {
//         const result = await randomPromise();
//         console.log(result);
//     } catch (error) {
//         console.log("Error:",error);
//     }
// }
// // Call the async function
// handlePromise();





// Activity 5:- Graceful Error Handling in Fetch

// Task 8:- Use the (fetch API) to request data from an invalid URL and handle the error using (.catch()). Log an appropriate error message to the console.



// Invalid URL 
// const invalidUrl = "https://invalid-url.com/data";

// fetch(invalidUrl).then((response) => {
//     if(!response.ok) {
//         throw new Error("Network response was not ok");
//     }
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log("Fetch Error:", error.message);
// })






// Task 9:- Use the (fetch) API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

// const invalidUrl = "https://invalid-url.com/data";

// const invalidUrl = "https://jsonplaceholder.org/userss";
// const getData = async(url) => {
//     try {
//        const response = await fetch(url);
//        if(!response.ok) {
//         throw new Error(`Network response was not ok`);
//        }
//        return response.json()
//     } catch (error) {
//         return `Error happened: ${error.message}`
//     }
// }
// getData(invalidUrl).then((data) => {
//  if(Array.isArray(data)) {
//     const userName = data.map((user) => `${user.firstname} : ${user.birthDate}`
// )
//     console.log(userName);
//  }else{
//     console.log(data); // Log the error message
//  }
// })


