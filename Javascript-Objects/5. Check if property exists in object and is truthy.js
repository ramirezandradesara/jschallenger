// 5️⃣ Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

function myFunction(a, b) {
  if (b in a) {
    return a[b] !== false && a[b] !== undefined && a[b] !== null;
  }
  // return a[b] ? true : false
  // return Boolean(a[b])
  return a?.b ? true : false; // ❌ el valor es undefined pero la key SI existe
}

// console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
// console.log(myFunction({ x: 'a', y: null, z: 'c' }, 'y'));
// console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z'));
