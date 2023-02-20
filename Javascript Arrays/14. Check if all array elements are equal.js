// Write a function that takes an array as argument.
// It should return true if all elements in the array are equal.
// It should return false otherwise.

function myFunction(arr) {
  return arr.every(value => value === arr[0])
  return new Set(arr).size === 1 
  // The Set object lets you store unique values of any type, whether primitive values or object references.
}

console.log(myFunction([true, true, true, true]));
console.log(myFunction([1, 1, 1, 2]));
