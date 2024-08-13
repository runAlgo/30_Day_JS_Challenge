// Tasks/Activities:
// Task 1:- Write a function that another function, where the inner function accesses
// a variable from the other function's scope. Call the inner function and log the result.

// function backAccount(initialBalance) {
//   let balance = initialBalance;

//   return {
//     getBalance: function () {
//       return balance;
//     },
//     deposite: function (amount) {
//       if (amount < 1) return `Negative amount invalid!`;
//       balance += amount;
//       return balance;
//     },
//     withdraw: function (amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return balance;
//       } else {
//         return `Invalid amount!`;
//       }
//     },
//   };
// }

// const myAccount = backAccount(100);
// console.log(myAccount.getBalance());
// console.log(myAccount.deposite(-50));
// console.log(myAccount.withdraw(30));
// console.log(myAccount.getBalance());

//*** Real-Life Example: Event Handlers ****
//Closures are also commonly used in event handlers. For instance, you might want to create buttons that, when clicked, display their respective sizes.

// function makeSizer(size) {
//   return function() {
//    const size = document.body.style.fontSize = size + 'px'; //
//     console.log(size);
//   };
// }

// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;

// Task 2:- Create a closure that maintains a private counter. Implement functions to
// increment and get the current value of the counter.

// function createCounter() {
//     let count = 0; // This is the private counter variable

//     return {
//         increment: function() {
//             count++;
//         },
//         getValue: function() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();

// counter.increment();
// console.log(counter.getValue()); // Output: 1

// counter.increment();
// console.log(counter.getValue()); // Output: 2

// function privateCounter() {
//     let counter = 0;
//     return {
//         increment: () => {
//             counter++
//             return counter;
//         },
//         getValue: () => {
//             return counter;
//         }
//     }

// }

// const counter = privateCounter();
// counter.increment();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());

// function outer(a, b) {
//     let name = "kalu"
//     function add() {
//         return a + b;
//     }
//     function sub() {
//         return a - b;
//     }
//     return {add, sub}
// }
// const data = outer(4, 3);
// console.log(data.add())
// console.log(data.sub())

// **** practical implementation ****

// document.getElementById('blue').onclick = () => {
//     document.body.style.backgroundColor = "blue"
// }
// document.getElementById('red').onclick = () => {
//     document.body.style.backgroundColor = "red"
// }
// document.getElementById('yellow').onclick = () => {
//     document.body.style.backgroundColor = "yellow"
// }

// **** Closure in Real life use ****

// function handleBtn(color) {
//     return function() {
//         document.body.style.backgroundColor = `${color}`
//     }
// }
// document.getElementById("red").onclick = handleBtn('red')
// document.getElementById("blue").onclick = handleBtn('blue')
// document.getElementById("yellow").onclick = handleBtn('yellow')

// Actic=vity 2:- Practical Closures

// Task 3:- Write a function that generates unique IDs. Use a closure to keep
// track of the generated ID and increment it with each call.

// function createUniqueIdGenerator() {
//     let id = 0; // This variable is enclosed in the closure

//     return function() {
//         id++; // Increment the ID each time the funciton is called
//         return id; // Return the new ID
//     };
// }

// const generateUniqueId = createUniqueIdGenerator();
// console.log(generateUniqueId()); // 1
// console.log(generateUniqueId()); // 2
// console.log(generateUniqueId()); // 3

// Task 4:- Create a closure that captures a user's name and retruns a funciton that greets the user by name.

// function greeting(name) {
//     return function() {
//         return `Welcome to chai aur code: ${name}`
//     }
// }
// const greet = greeting('dipak')
// console.log(greet());

// Activity 3:- Closures in Loops

// Task 5:- Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
// function createFunctionArray(length) {
//     const functions = [];
  
//     for (let i = length; i > 0; i--) {
//       // Create a closure to capture the current value of i
//       (function(index) {
//         functions.push(() => {
//           console.log(index);
//         });
//       })(i);
//     }
  
//     return functions;
//   }
  
//   const functionArray = createFunctionArray(5);
//   // Calling the functions
//   const n = 5
//   for(let j = 0; j < n; j++) {
//     functionArray[j]()
//   }



// Activity 4:- Module Pattern

// Task 6:- Use closure to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

// function manageCollectionItems(){
//     let items = []
//     return {
//         add: (item) => {
//             items.push(item)
//         },
//         remove: (item) => {
//             const index = items.indexOf(item);
//             if(index !== -1) {
//                 items.splice(index, 1);
//             }
//         },
//         listItem: () => {
//             console.log(items);
//         }
//     }
// }
// export default manageCollectionItems;




// Activity 5:- Memoization

// Task 7:- Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

// Function to fetch user data with memoization

// function fetchUsersWithMemo(url) {
//     const cache = {}; // Stores the cached data
  
//     return async () => {
//       if (cache[url]) {
//         return cache[url]; // Return cached data if available
//       }
  
//       const response = await fetch(url);
//       const users = await response.json();
//       cache[url] = users; // Store fetched data in cache
//       return users;
//     };
//   }
  
//   // Usage
//   const getUsers = fetchUsersWithMemo("https://jsonplaceholder.org/users");
  
//   getUsers()
//     .then(users => {
//       console.log("Fetched users:", users);
//     })
//     .catch(error => {
//       console.error("Error fetching users:", error);
//     });
  
//   // Subsequent calls will use the cached data
//   getUsers()
//     .then(users => {
//       console.log("Using cached users:", users);
//     })
//     .catch(error => {
//       console.error("Error fetching users:", error);
//     });
  






// const calc = (n) => {
// let sum = 0;
//     for(let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }


// const memoize = (fun) => {
//     let cache = {};
//     return function(...args) {
//         let n = args[0];
//         if(n in cache) {
//             console.log("cache");
//             return cache[n];
//         }else {
//             console.log("calculating first time")
//             let result = fun(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

// // first time
// console.time();
// const response = memoize(calc);
// console.log(response(5))
// console.timeEnd();

// // second time
// console.time();
// console.log(response(5))
// console.timeEnd()

// // third time
// console.time();
// console.log(response(5))
// console.timeEnd()

// // fourth time
// console.time();
// console.log(response(5))
// console.timeEnd()





// Task 8:- Create a memoized version of a factorial that calcultes the factorial of a number.

function memoizedFactorial(n, cache = {}) {
    if(n in cache) {
        return cache[n];
    }


    if(n <= 1) return 1;

    cache[n] = n * memoizedFactorial(n - 1, cache);
    return cache[n];
}
console.time()
console.log("first time:", memoizedFactorial(5));
console.timeEnd()

console.time()
console.log("Cache:", memoizedFactorial(5));
console.timeEnd()





  


