// Write a function that takes an array of numbers as argument.
// It should return the average of the numbers.

function myFunction(arr) {
    return arr.reduce((curr, accum) => accum + curr) / arr.length 
}

console.log(myFunction([10, 100, 40]));
