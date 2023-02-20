// Write a function that takes an array of numbers as argument.
// Return the number of negative values in the array.

function myFunction(a) {
  return a.filter(curr => curr < 0).length
  return a.filter(curr => Math.sign(curr) === -1).length
}

console.log(myFunction([1,-2,2,-4]));