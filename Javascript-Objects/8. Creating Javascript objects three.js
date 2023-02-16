// 8️⃣ Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction8(a, b) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    for (let i = 0; i < b.length; i++) {
      obj[a[i]] = b[i];
    }
  }
  return obj;
}

// function myFunction8(a, b) { // ❔ ni idea porque no pasa
//   let obj = {}
//   a.forEach((key, i) => obj[key]= b[i]);
//   return obj
// }

/* The author's solution */

// function myFunction8(a, b) {
//     return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
//  }

console.log(myFunction8(["a", "b", "c"], [1, 2, 3]));
console.log(myFunction8(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(myFunction8([1, "b"], ["a", 2]));
