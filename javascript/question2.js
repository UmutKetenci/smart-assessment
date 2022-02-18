// ASSESSMENT:
// Fill inside of the optimizeFunction function!

function doExpensiveTask(input) {
  const result = 2 * input;
  console.log("Doing expensive task...:", result);
  return result;
}

function optimizeFunction(func) {
  // You shouldn't need to edit anywhere else
  // Do your work inside this function
  // SOLUTION:+

  /* My Code */

  //We use memoization optimization technique to speed up our programs. In this code by storing the last input and result in the cache, if the input same as the previous is entered by the user again, we can easily retrieve the result from cache without any further processing. Memoization is generally used in storing very complex mathematical operations or loading gigantic data only once in order to optimize our app.

  let cache = {}; //our cache to store a single input and it's result.
  return (...args) => {
    //args[0] is user's number input.
    let num = args[0];
    if (num === cache.input) {
      //checking if the number is the same as previously entered number.
      console.log(`Same input, no need to calculate: ${cache.result} `); //logging previous cache result.
      return;
    } else {
      let result = func(num); //if the num is not the same from the last input, we have to process the input.
      cache = { input: num, result: result }; //our new input and results are stored in cache.
      return;
    }
  };

  /* My Code */
}

// anOptimizedFunc shouldn't execute the expensive task if new input is same as the previous one
const anOptimizedFunc = optimizeFunction(doExpensiveTask);
anOptimizedFunc(2); // Should print: Doing expensive task...: 4
anOptimizedFunc(2); // Should print: Same input, no need to calculate: 4
anOptimizedFunc(4); // Should print: Doing expensive task...: 8
anOptimizedFunc(4); // Should print: Same input, no need to calculate: 8
// It should forget the older input
anOptimizedFunc(2); // Should print: Doing expensive task...: 4

function doAnotherExpensiveTask(input) {
  const result = 10 * input;
  console.log("Doing another expensive task...:", result);
  return result;
}

// We can optimize another function, which should also behave similarly
const anotherOptimizedFunc = optimizeFunction(doAnotherExpensiveTask);
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
anotherOptimizedFunc(2); // Should print: Same input, no need to calculate: 20
anotherOptimizedFunc(4); // Should print: Doing another expensive task...: 40
anotherOptimizedFunc(4); // Should print: Same input, no need to calculate: 40
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
