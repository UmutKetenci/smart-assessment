// ASSESSMENT:
// There is a div in the index.html file which will be animated
// Edit question4.css and this file for this assessment(You should do the css part in css file)

// Before animating, center this div both vertically and horizontally in the middle of viewport
// After that, when we click the buttons inside of this div
// The div should animate
// For 'Rotate 360' button, it should do 360° rotation on its center in 1 second
// For 'Go Up and Down' button, it should go up touch the top of the viewport and return to middle in 1 second
// Example is presented in question4.gif
// Don't forget to add your css and javascript to index.html file

/* My Code */
//A simple code to add animation to the buttons.

//Getting the elements..
const btnRotate = document.querySelector("#rotate-button");
const btnUpDown = document.querySelector("#up-down-button");
const divToBeAnimated = document.querySelector("#to-be-animated");

// I added event listeners here instead of elements in html page because of Seperation of Concerns.
btnRotate.addEventListener("click", () => animate("spin"));
btnUpDown.addEventListener("click", () => animate("up-and-down"));

//Animation function. There is no need for using functions for each animation since we are only adding classes to our elements. As a result, we have a single function with animations as parameters that are going to be added to the appropriate element.
const animate = (animation) => {
  //we have 2 animation options(classes) => spin and up-and-down
  divToBeAnimated.classList.add(animation); //adding our animation class to the element.
  setTimeout(() => {
    //Animation time is 1 second in css so we are removing the class after a second. We will have a circle and will be able to add class after a second and animate the div again.
    divToBeAnimated.classList.remove(animation);
  }, 1000);
};
