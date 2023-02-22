// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

function myFunction(setA, setB) {
  const set = new Set();
  setB.forEach((el) => setA.has(el) && set.add(el));
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]));
console.log(myFunction(new Set("12345"), [..."45678"]));
console.log(myFunction(new Set([1, 2, 3]), [2, 3, 4]));
