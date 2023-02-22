// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

function myFunction(set, val) {
  if (set.has(val)) set.delete(val);
  return set;

  set.delete(val);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1));
