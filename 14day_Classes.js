// Task/ Activities:
// Task 1:- Define a class Person with properties (name) and (age), and a method to return a greeting message. Create an instance of the class and log the greeting message.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }
// // Creating instance of the Person class
// const person1 = new Person("kalu", 21);

// // Using the instance
// person1.greet(); // Output: Hello, my name is kalu and I am 21 years old.

// Task 2:- Add a method to the (Person) class that updates the age property and logs the updated age.
// class Person {
//     constructor(age) {
//         this.age = age;
//     }
//     updateAge(newAge) {
//         this.age = newAge;
//         return `The updated age is: ${this.age}`
//     }
// }
// // Create instance of Person class
// const person1 = new Person(21);
// // Using the instance
// console.log(person1.updateAge(22));

// Activity 2:- Class Inheritance

// Task 3:- Define a class (Student) that extends the (Person) class. Add a property (studentId) and a method to return the student ID. Create an instance if the (Student) class and log the student ID.

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age); // Call the parent class constructor
//         this.studentId = studentId;
//     }
//     greeting() {
//         return "Welcome to chai aur code.";
//     }
//     returnStudentId() {
//         return `Student id is: ${this.studentId}`
//     }
//     overrideGreeting(override) {
//         return `Overritten greeting is: ${override}`
//     }
// }
// // Creating a Instance of Student class
// const student1 = new Student("hitesh", 23, "112");
// console.log(student1.returnStudentId());

// Task 4:- Override the greeting method in the (Student) class to include the student ID in the message. Log the overridden greeting message.

// const student2 = new Student("kalu", 23, '232');
// console.log(student2.overrideGreeting("This is prank, It's free course of Js Interview prep."));

// Activity 3:- Static Methods and Properties
// Task 5:- Add a static method to the (Person) class. that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// Defination of Static Method in JS:- Static method is a method defined
// on a class itself, rather than on instances of the class. You use the
// (static) keyword to define these methods. Here are some key key points
// about static methods:-

// class person {
//     static greeting() {
//         return "Welcome to JS Challange."
//     }
// }
// console.log(person.greeting());

// Task 6:- Add a static property to the (student) class to keep track
// of the number of students created. Increment this property in the
// constructor and log the total number of students.

// class Student {
//    // Static property to keep track of the number of students
//    static count = 0;

//    constructor(name) {
//     this.name = name;
//     // Increment the static count property each time a new student is created
//     Student.count++;
//    }
// }
// const student1 = new Student("kalu");
// const student2 = new Student("dipak");
// const student3 = new Student("raj");
// const student4 = new Student("dev");
// console.log(`Total number of students: ${Student.count}`)

// Activity 4:- Getters and Setters

// Task 7:- Add a getter method to the (Person) class to return the full name (assume a (firstName) and (lastName) property).
// Create an instance and log the full name using the getter.

// class Person {
//     constructor(fullName, lastName) {
//         this.fullName = fullName;
//         this.lastName = lastName;
//     }
//     getter() {
//         return this.fullName;
//     }
// }
// const person1 = new Person("kalu", "don");
// console.log(person1.getter());

// Task 8:- Add a setter method to the (Person) class to update the name properties (firstName) and (lastName).
// Update the name using the setter and log the updated full name.

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     setter() {
//         this.firstName = "Dona"
//         this.lastName = "thapa"
//         return this;
//     }
// }
// const person1 = new Person("kalu", "code");
// console.log("Before change:", person1);
// console.log("After change:", person1.setter());

// Activity 5:- Private Fields (Optional)

// Task 9:- Define a class (Account) with private fields for (balance) and a method to
// deposite and withdrow money. Ensure that the balance can only be updated through these methods.

// class Account {
// // The #balance field is private and can only be accessed within the class.
//   #balance; // Private field
//   constructor(money = 0) {
//     this.#balance = money;
//   }
//   deposite(money) {
//     if (money > 0) {
//       this.#balance += money;
//       return this;
//     } else {
//       return "Deposite amount must be positive.";
//     }
//   }
//   withdrow(money) {
//     if (money > 0 && money <= this.#balance) {
//       this.#balance -= money;
//       return this;
//     }else {
//         return "Invalid withdrawl amount."
//     }
//   }
//   getBalance() {
//     return this.#balance;
//   }
// }
// const account1 = new Account(100);
// account1.deposite(50); // Deposited: $50
// account1.withdrow(30); // Withdrew: $30
// console.log(`Current Balance: ${account1.getBalance()}`);



// Task 10:- Create an instance of the (Account) class and test the deposite and withdrow methods, logging the
// balance after each operation.


// class Account {
//     #balance; // Private field
  
//     constructor(initialBalance = 0) {
//       this.#balance = initialBalance;
//     }
  
//     // Method to deposit money
//     deposit(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//         console.log(`Deposited: $${amount}`);
//       } else {
//         console.log('Deposit amount must be positive.');
//       }
//     }
  
//     // Method to withdraw money
//     withdraw(amount) {
//       if (amount > 0 && amount <= this.#balance) {
//         this.#balance -= amount;
//         console.log(`Withdrew: $${amount}`);
//       } else {
//         console.log('Invalid withdrawal amount.');
//       }
//     }
  
//     // Method to get the current balance
//     getBalance() {
//       return this.#balance;
//     }
//   }
  
//   // Create an instance of the Account class
//   const myAccount = new Account(100);
  
//   // Test the deposit method
//   myAccount.deposit(50); // Deposited: $50
//   console.log(`Current Balance: $${myAccount.getBalance()}`); // Current Balance: $150
  
//   // Test the withdraw method
//   myAccount.withdraw(30); // Withdrew: $30
//   console.log(`Current Balance: $${myAccount.getBalance()}`); // Current Balance: $120
  
//   // Test invalid deposit
//   myAccount.deposit(-20); // Deposit amount must be positive.
//   console.log(`Current Balance: $${myAccount.getBalance()}`); // Current Balance: $120
  
//   // Test invalid withdrawal
//   myAccount.withdraw(200); // Invalid withdrawal amount.
//   console.log(`Current Balance: $${myAccount.getBalance()}`); // Current Balance: $120
  