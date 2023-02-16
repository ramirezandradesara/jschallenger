// 1️⃣1️⃣ Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction(a) {
  // return Object.values(a).reduce((acum, num) => acum + num);
  return Object.values(a).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

console.log(myFunction({ a: 1, b: 2, c: 3 })); // 6
