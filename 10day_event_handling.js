// Task/Activities:
// Activity 1:- Basic Event Handling

// Task 1:- Add a click event listener to a button that change the text content of a paragraph.
// const chai = document.getElementById("chai");
// const content = document.getElementById("content");
// content.addEventListener("click", (e) => {
//  e.preventDefault();
//  chai.textContent = "Welcome to Chai aur Code";
// })


// Task 2:- Add a double-click event listener to an image that toggles its visibility.
// const data = document.getElementById("dblClick");
// let toggle = true;
// data.addEventListener("dblclick", () => {
   
// if(toggle) {
//     data.style.display = "none"
// } else {
//     data.style.display = 'block'
// }
// toggle = !toggle;

// })




// Activity 2:- Mouse Events
// Task 3:- Add a mouseover event listener to an element that changes its background color.
const changeBg = document.getElementById("changeBg");
// if(changeBg) {
//     changeBg.addEventListener("mouseover", (e) => {
//         changeBg.style.backgroundColor = "red";
//     })
// }

// Task 4:- Add a mouseout event listener to an element that resets its background color.
// if(changeBg) {
//     changeBg.addEventListener("mouseout", (e) => {
//         changeBg.style.backgroundColor = "blue";
//     })
// }




// Activity 3:- Keyboard Events
// Task 5:- Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById("input");
const output = document.getElementById("output");
// input.addEventListener("keydown", (event) => {
// console.log(event.key)
// })


// Task 6:- Add a keyup event listener to an input field that displays the  current value in a paragraph.

// input.addEventListener("keyup", () => {
// output.textContent = input.value;
// })



// Activity 4:- Form Events
// Task 7:- Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

// const form = document.getElementById("form");
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // create a FormData object from the form
//     const formData = new FormData(form);

//     // Log the form data to the console
//     for(const [key, value] of formData.entries()) {
//         console.log(`${key}: ${value}`);
//     }
// })



// Task 8:- Add a change event listener to a select dropdown that displays the selected value in a paragraph.
// const select = document.getElementById("select");
// const result = document.getElementById("result");
// select.addEventListener("change", (e) => {
//     e.preventDefault();
//     result.textContent = select.value;
// })



// Activity 5:- Event Delegation 

// Task 9:- Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
// const list = document.getElementById("myList");
// list.addEventListener("click", (e) => {
//     e.preventDefault();
//     if(e.target && e.target.nodeName === 'LI') {
//         console.log('Clicked item text:', e.target.textContent)
//     }
// })


// Task 10:- Add an event listener to a parent element that listens for events from dynamically added child elements.

const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
    // check if the clicked element is a dynamically added child
    if(e.target && e.target.classList.contains('child')) {
        console.log('Clicked child text:', e.target.textContent);
    }
});

// Function to add a new child element
document.getElementById("addChild").addEventListener('click', (e) => {
    const newChild = document.createElement('div');
    newChild.className = 'child';
    newChild.textContent = 'I am a new child';
    parent.appendChild(newChild);
});