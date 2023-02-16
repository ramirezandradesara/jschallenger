// 4️⃣ Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'. Return false otherwise
// Tip: test case 3 is a bit tricky because the value of property 'z' is undefined 
// but the property itself exists

function myFunction(a, b) {
  return b in a;
  return Object.hasOwn(a, b);
  return a.hasOwnProperty(b); // es reemplazado por Object.hasOwn()
  return Boolean(a[b]);
  return a[b] ? true : false;
}

// console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
// console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
// console.log(myFunction({ x: "a", y: "b", z: undefined }, "z"));
