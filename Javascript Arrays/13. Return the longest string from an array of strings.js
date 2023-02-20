// Write a function that takes an array of strings as argument. Return the longest string.

function myFunction(arr) {
  let longestString = "";
  arr.forEach((element) => {
    if (element.length > longestString.length) longestString = element;
  });
  return longestString;
}

function myFunction(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}

console.log(myFunction(["help", "me"]));
console.log(myFunction(["I", "need", "candy"]));
