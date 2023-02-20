// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates
// in hours, minutes, and seconds

// function myFunction(a, b) {
//     return {
//       hrs: Math.abs(a.getHours() - b.getHours()),
//       min: Math.abs(a.getMinutes() - b.getMinutes()),
//       sec: Math.abs(a.getSeconds() - b.getSeconds()),
//     };
//   }

function myFunction(a, b) {
  let newObj = {};
  Object.assign(newObj, { hours: Math.abs(a.getHours() - b.getHours()) });
  Object.assign(newObj, { minutes: Math.abs(a.getMinutes() - b.getMinutes()) });
  Object.assign(newObj, { seconds: Math.abs(a.getSeconds() - b.getSeconds()) });

  return newObj;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
);
console.log(
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
);
