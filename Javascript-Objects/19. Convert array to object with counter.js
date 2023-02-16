// 1️⃣9️⃣ Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function myFunction(a) {
//   let newObj = {};
//   a.forEach((element, index) => {
//     let obj = {};

//     if (element in newObj) {
//       obj[`${element}`] = obj[`${element}`] + 1;
//     } else {
//       obj[`${element}`] = 1;
//     }

//     Object.assign(newObj, obj);
//   });
//   return newObj; 

  return a.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
}

console.log(myFunction([1, 2, 2, 3])); // Expected: {1:1, 2:2, 3:1}
console.log(myFunction([9, 9, 9, 99])); // Expected: {9:3, 99:1}
console.log(myFunction([4, 3, 2, 1])); // Expected: {1:1, 2:1, 3:1, 4:1}
