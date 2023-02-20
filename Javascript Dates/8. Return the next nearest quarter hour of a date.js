// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction(date) {
  switch (true) {
    case date.getMinutes() < 15:
      return 15;
    case date.getMinutes() < 30:
      return 30;
    case date.getMinutes() < 45:
      return 45;
    case date.getMinutes() <= 59:
      return 0;
    default:
      break;
  }

  //   if (date.getMinutes() < 15) {
  //     return 15;
  //   } else if (date.getMinutes() < 30) {
  //     return 30;
  //   } else if (date.getMinutes() < 45) {
  //     return 45;
  //   } else {
  //     return 0;
  //   }
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 55, 00)));
