// Day 7:- Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access

// Task 1:- Create an object representing a book with properties like title, author, and year, and log the object to the console.
// const book = {
//     title: "js",
//     author: "Hitesh",
//     year: "2024"
// }
// const {title, author, year} = book;
// console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);


// Task 2:- Access and log the title and author properties if the book object
// const {title, author} = book;
// console.log(`Title: ${title}, Author: ${author}`);





// Activity 2:- Object Methods

// Task 3:- Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// const book = {
//     title: "js",
//     author: "Hitesh",
//     year: "2024",
//     getBookInfo() {
//         return `Title: ${this.title}, Author: ${this.author}`
//     }
// };
// console.log(book.getBookInfo());


// Task 4:- Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
// const book = {
//     title: "js",
//     author: "Hitesh",
//     year: "2024",
//     changeYear(newYear) {
//         this.year = newYear;
//     }
// }
// book.changeYear("2025"); // Update the year to 2025
// console.log(book["year"])





// Activity 5:- Nested Objects
// Task 5:- Create a nested object representing  a library with properties like name and books(an array of book objects), and log the library object to the console.
// const library = {
//    name: "Awesome Library",
//    books: [
//     {
//         title: "JS Core",
//         author: "Hitesh",
//         year: "2024"
//     },
//     {
//         title: "Atomic Science",
//         author: "Kalu",
//         year: "2024"
//     }
//    ]
// }
// console.log(library)


// Task 6:- Access and log the name of the library and the titles of all the books in the library.
// const library = {
//    name: "Awesome Library",
//    books: [
//     {
//         title: "JS Core",
//         author: "Hitesh",
//         year: "2024"
//     },
//     {
//         title: "Atomic Science",
//         author: "Kalu",
//         year: "2024"
//     }
//    ]
// }
// library.books.forEach(book => {
//     console.log(book.title);
// });
// console.log(library.name)




// Activity 4:- The (this) Keyword

// Task 7:- Add a method to the book that uses the (this) keyword to return a string with the book's title and year, and log the result of calling this method.

// const book = {
//     title: "JS",
//     author: "Hitesh",
//     year: "2024",
//     accessBooksValue()  {
//      return `${this.title} (${this.year})`
//     }
// }
// console.log(book.accessBooksValue())




// Activity 5:- Object Iteration
// Task 8:- Use a (for...in) loop to iterate over the properties of the book object and log each property and its value.
// const book = {
//     title: "JS",
//     author: "Hitesh",
//     year: "2024",
// }
// for(const property in book) {
//     console.log(`${property}`)
// }


// Task 9:- Use (Object.keys and Object.values) methods to log all the keys and values of the book object.
// const book = {
//     title: "JS",
//     author: "Hitesh",
//     year: "2024",
// }
// const keys = Object.keys(book);
// console.log(keys);
// const values = Object.values(book);
// console.log(values);