// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
  let set = new Set();
  return set.add(a).add(b).add(c)

  return new Set([a, b, c])
}

console.log(myFunction(1, "b", 3));
console.log(myFunction(NaN, null, false));
console.log(myFunction("a", ["b"], { c: 3 }));