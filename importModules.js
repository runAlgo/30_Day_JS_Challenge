// Task 1:-

// import { add as addition} from "./13day_Modules.js";

// const result = addition(5, 3);
// console.log(`The sum is: ${result}`);



// Task 2:-

// import { person } from "./13day_Modules.js";
// console.log(person.fullName);
// person.introduce();
// person.birthday();
// console.log(person.age);

// person.firstName = "Jane";
// person.introduce();


// Task 3:-

// import {name, age, course} from "./13day_Modules.js"

// console.log(name());
// console.log(age());
// console.log(course())



// Task 5:-

// Import the entire module as an object
// import { PI, E, add, multiply } from "./13day_Modules.js";

// // Use the properties of the imported module
// console.log('PI:', PI); // Output: PI: 3.14
// console.log('E:', E); // Output: E: 2.71
// console.log('Add:', add(5, 3)); // Output: Add: 8
// console.log('Multiply:', multiply(5, 3)); // Output: Multiply: 15




// Task 5:-

// import multiply from "./13day_Modules.js";
// console.log("Product is:", multiply(3, 5));



// Task 6:- 
import _ from "lodash"
import axios from "axios"
// Use the capitalize function from Lodash
// const text = "kalu";
// const text2 = " chai aur code ";
// const capitalizeText = _.capitalize(text);
// const trimText = _.trim(text2);
// console.log(capitalizeText); // Output: "kalu"
// console.log(trimText);


// Task 7:-

// const getData = async() => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.org/users')
//             return response.data;
//     } catch (error) {
//         return `Something error in network: ${error}`
//     }
   
    
// }
// getData().then((data) => {
//     console.log(data);
// })



import  manageCollectionItems  from "./15day_Closures.js"

const itemManager = manageCollectionItems();
itemManager.add('apple');
itemManager.add('banana');
itemManager.listItem();
itemManager.remove("banana");
itemManager.listItem()



