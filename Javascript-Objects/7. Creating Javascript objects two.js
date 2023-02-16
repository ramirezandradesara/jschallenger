// 7️⃣ Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction7(a, b) {
  return { [a]: b };
  const obj = new Object(); // no lo toma pero lo hace
  obj[a] = b;
  return obj;
}

// console.log(myFunction7('a','b'));
// console.log(myFunction7('z','x'));
// console.log(myFunction7('b','w'));
