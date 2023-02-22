// Write a function that takes a Set and an array as arguments.
// If not already existing, add each element in the array to the Set.
// Return the modified Set

function myFunction(set, array) {
  array.forEach((element) => {
    if (!set.has(element)) set.add(element);
  });

  return set;

  return new Set([...set, ...array]);
}

console.log(myFunction(new Set([1, 2, 3]), [1, 4]));
console.log(myFunction(new Set("12345"), [..."67891"]));
