// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

function myFunction(a, b) { // can't resolve it 🥲
  var result = new Date(a);
  result.setDate(result.getDate() + b);
  return new Date(
    Date.UTC(result.getFullYear(), result.getMonth(), result.getDay())
  );
}

function myFunction( date, daysToAdd ) {
    return date.setDate(date.getDate() + daysToAdd)
  }

console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 31));
console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 10));
console.log(myFunction(new Date(Date.UTC(2000, 02, 28)), 2));
