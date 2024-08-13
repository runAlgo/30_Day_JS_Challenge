// Tasks/Activities:

// Activity 1:- Understanding Promises

// Task 1:- Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         console.log("Async task is completed")
//         resolve()
//     }, 2000)
// })

// promiseOne.then(() => {
//     console.log("Promise consumed");
// })

// Task 2:- Create a promise that rejects with an error message after a 2-seconds timeout and handle the error using .catch().

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject (new Error("Something went wrong"))
//     }, 2000)
// })
// .catch((error) => {
//     console.error(error.message);
// })

// Activity 2:- Chaining Promises
// Task 3:- Create a sequence of promises that simulate fetching data from a server. Chain the promise to log messages in specific order.

// const fetchData = (url, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Fetching data form ${url}`);
//             resolve(`Data form ${url}`)
//         }, delay)
//     })
// }
// fetchData("https://jsonplaceholder.org/users", 1000)
// .then((data) => {
//     console.log(data);
//     return fetchData('https://jsonplaceholder.org/users', 2000);
// })
// .then((data) => {
//     console.log(data);
//     return fetchData('https://jsonplaceholder.org/users', 3000);
// })
// .catch((error) => {
//     console.error('Error:', error);
// })

// Activity 3:- Using Async/Await
// Task 4:- Write an async function that waits for a promise to resolve and then logs the resolved value.

// async function logResolvedValue(promise) {
//     try {
//         const result = await promise;
//         console.log(result);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Example usage:
// const examplePromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise resolved!'), 2000);
// });

// logResolvedValue(examplePromise);

// Task 5:- Write an async function that handles a rejected promise using try-catch and log the error message.

// const handleRejectPromise = async() => {
//     try {
//         const result = await Promise.reject("This is a rejection message");
//         console.log(result);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// Call the function to see the error handling in action
// handleRejectPromise();

// Activity 4:- Fetching Data from an API
// Task 6:- Use the (fetch) API to get data from a public API and log the response data to the console using promises.

// const getUsers = async (api) => {
//     try {
//       const response = await fetch(api);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log("ERROR:", error);
//     }
//   };
  
//   getUsers("https://jsonplaceholder.typicode.com/users").then((data) => {
//     const userDataDiv = document.getElementById('userData');
//     const names = data.map((user) => user.name).join('<br>');
//     userDataDiv.innerHTML = names;
//   });
  


// task 7:- Use the fetch API to get data from a public API and log the response data to the console using async/awit.
// const getUsers = async (api) => {
//     try {
//       const response = await fetch(api);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log("ERROR:", error);
//     }
//   };
  
//   getUsers("https://jsonplaceholder.typicode.com/users").then((data) => {
//    console.log(data);
//   });




//  Activity 5:- Concurrent Promises
// Task 8:- Use Promise.all to wait for multiple promises to resolve and then log all their values.

// const promise1 = Promise.resolve(3);
// const promise2 = 41;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "foo")
// })

// Promise.all([promise1, promise2, promise3])
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log("One of the promise failed:", error);
// })



// Example: 2


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("first promise resolved");
//         resolve();
//     }, 300)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise2 resolved");
//         resolve()
//     },500)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise3 reject");
//         reject()
//     },500)
// })

// Promise.all([promise1, promise2, promise3])
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })





// Task 9:- Use (Promise.race) to log the value of the first promise that resolves among multiple promises.
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Kalu")
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Chai")
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Code")
// })


// Promise.race([promise1, promise2, promise3])
// .then((value) => {
//     console.log(value); // "Second promise"
// })
// .catch((error) => {
//     console.error(error);
// });

// ***** Practical Use Case ****** 
// Imagine you are making multiple API calls to different servers, and you want to use the response from the fastest server.

// import fetch from "node-fetch"

// const apiCall1 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
// const apiCall2 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
// const apiCall3 = fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json());

// Promise.race([apiCall1, apiCall2, apiCall3])
// .then((data) => {
//     console.log('Fastest response:', data);
// })
// .catch((error) => {
//     console.log('Error:', error);
// });