// Day 9:- DOM Manipulation
// Tasks/Activities:-

// Activity 1:- Select an HTML and Manipulating Elements

// Task 1:- Select an HTML element by its ID and change its text content.
// let data = document.getElementById("res")
// data.innerText = "Hello World"

// Task 2:- Select an HTML element by its class and change its backgraound color.
// let color = document.querySelector(".color");
// color.style.backgroundColor = "yellow"





// Activity 2:- Creating and Appending Elements
// Task 3:- Create a new (div) element with some text content and append it to the body.
// let div1 = document.querySelector(".div1")
// div1.textContent = "hello World"
// div1.style.color = "red"
// document.body.appendChild(div1)


// const newDiv = document.createElement('div')
// newDiv.textContent = "new div content"
// document.body.appendChild(newDiv)


// Task 4:- Create a new (li) element and add it to an existing (ul) list.
// const newList = document.createElement('todoList');
// newList.textContent = 'This is a new list item';
// const list = document.querySelector('ul');
// list.appendChild(newList)





// Activity 3:- Removing elements
// Task 5:- Select an HTML element and remove it from the DOM.
// const deleteHaters = () => {
//     const chai = document.querySelector('.chai');
//     if(chai) {
//         chai.remove();
//         alert("Haters are Deleted!");
//     }else{
//         alert("Haters are not found or already deleted!")
//     }
// }


// Task 6:- Remove the last child of a specific HTML element.

// function removeLastChild() {
//     const parentElement = document.querySelector('.parent');
//     if(parentElement && parentElement.lastElementChild) {
//         //Remove the last child
//         parentElement.removeChild(parentElement.lastElementChild);
//         alert("LastChild Deleted!");
//     }else{
//         alert("LastChild not found or already Deleted!");
//     }
// }




// Activity 4:- Modifying Attributes and Classess

// Task 7:- Select an HTML element and change one of its attributes(e.g., (src) of an (img) tag).
// let bool = true;
// function changeImage() {
//     function toggleImage() {
//         let imageElement = document.getElementById("myImage");
//         if(bool) {
//             imageElement.src = "image1.jpeg";
//         }else{
//             imageElement.src = "image.jpeg"
//         }
//         bool = !bool;
//     }
// toggleImage();
// }


// Task 8:- Add and remove a CSS to/from an HTML element.

// const box = document.getElementById('myBox');

// function addClass() {
//     box.classList.add('highlight');
// }

// function removeClass() {
//     box.classList.remove('highlight');
// }

// function toggleClass() {
//     box.classList.toggle('highlight');
// }




// Activity 5:- Event Handling
// Task 9:- Add a click event listener to a button that changes the text content of a paragraph.
// const button = document.getElementById('myButton');
// const paragraph = document.getElementById('myParagraph');

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//     // Change the text content of the paragraph
//     paragraph.textContent = 'The text has been changed!';
// });



// Task 10:- Add a mouseover event listener to an element the changes its border color.
// const element = document.getElementById('myElement');
// Add a mouseover event listener to the element
// element.addEventListener('mouseover', () => {
//     // Change the border color
//     set
//     element.style.borderColor = 'red';
// });

// // Add a mouseout event listener to reset the border color
// element.addEventListener('mouseout', () => {
//     // Reset the border color
//     element.style.borderColor = 'black';
// })

const element = document.getElementById("myElement");
let isChanging = false;

element.addEventListener('mouseover', changeBorderColor);
element.addEventListener('mousemove', changeBorderColor);

function changeBorderColor() {
    if(!isChanging) {
        isChanging = true;
        element.style.borderColor = getRandomColor();
        setTimeout(() => {
            isChanging = false;
        }, 200); // Change color every 200 milliseconds
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
