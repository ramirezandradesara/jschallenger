// 1️⃣8️⃣ Write a function that takes an array of objects and a string as arguments.
// Add a property with key 'continent' and value equal to the string to each of the objects.
// Return the new array of objects. Tipp: try not to mutate the original array

function myFunction(arr, str) {
  return arr.map((obj) => Object.assign(obj, { continent: str }));
  return arr.map((obj) => ({ ...obj, continent: str }));
}

console.log(
  myFunction(
    [
      { city: "Tokyo", country: "Japan" },
      { city: "Bangkok", country: "Thailand" },
    ],
    "Asia"
  )
); // Expected: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
