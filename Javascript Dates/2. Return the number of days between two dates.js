// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(a, b) {
  const diffDays = a - b; // it's the same as doing a.getTime() - b.getTime()
  return Math.abs(diffDays / (1000 * 60 * 60 * 24));
}

console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01")));
