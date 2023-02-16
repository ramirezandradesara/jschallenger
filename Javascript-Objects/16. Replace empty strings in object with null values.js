// 1️⃣6️⃣ Write a function that takes an object as argument.
//  Some of the property values contain empty strings.
//  Replace empty strings and strings that contain only whitespace with null values.
//  Return the resulting object

function myFunction(obj) {
  for (let key in obj) {
    if (obj[key].trim() === "") obj[key] = null; // or obj[i].trim().length === 0
  }
  return obj;

  /* author solution*/
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === "") newObj[key] = null;
  }
  return newObj;
}

console.log(myFunction({ a: "a", b: "b", c: "" })); // Expected: { a: 'a', b: 'b', c: null }
console.log(myFunction({ a: "", b: "b", c: " ", d: "d" })); // Expected: { a: null, b: 'b', c: null, d: 'd' }
console.log(myFunction({ a: "a", b: "b ", c: " ", d: " " })); // Expected: { a: 'a', b: 'b ', c: null, d: null }
