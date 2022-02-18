// ASSESSMENT:
// There is a text input in index.html which you will use
// Write a program such that:
// When we start typing inside the input,
// it will console.log the text only if we didn't type anything in the last 500ms
// You can find an example of the solution working in question3.gif
// Don't forget to add this file with script tag into index.html

// Hint: google 'debouncing'

// SOLUTION:

/* My Code */

//Debounce is the process of trigerring a function only once after the final input is entered while ignoring the previous inputs. It is usually used in queries such as Google Maps, Uber etc. where we want to show destination,location etc. after user finishes typing.

let timer; // this is the timeout timer that we are going to set.
const input = document.querySelector("#a_text"); // getting our element.

input.addEventListener("keyup", debounce); // I added event listener here instead of element in html page because of Seperation of Concerns.

function debounce() {
  // our tiny code snippet that is used for
  clearTimeout(timer); //clear the timeout everytime key is up.
  timer = setTimeout(() => {
    //set time out by 500ms.
    console.log(input.value);
  }, 500);
}

/* My Code */
