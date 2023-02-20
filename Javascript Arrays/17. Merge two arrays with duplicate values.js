// Write a function that takes two arrays as arguments.
// Merge both arrays and remove duplicate values.
// Sort the merge result in ascending order. Return the resulting array

function myFunction(a, b) {
  let newArr = [...new Set([...a, ...b])];
  newArr.sort((a, b) => a - b);
  return newArr;
}

console.log(myFunction([1, 2, 3], [3, 4, 5]));
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// let chars = ["A", "B", "A", "C", "B"];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);
