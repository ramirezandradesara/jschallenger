// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// function myFunction(str) {
//     let word = str.split("")
//     return word.reverse().splice(0, 3).reverse().join("")
// }

function myFunction(str) {
    return str.slice(-3);
}

// console.log(myFunction("facultad"));
// console.log(myFunction('abcdefg'));
// console.log(myFunction('1234'));
// console.log(myFunction('fgedcba'));

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result


function myFunction2(a) {
    return a.slice(0, 3)
}

// console.log(myFunction2("abcdefg"));

function myFunction3(a) {
    let mitad = a.length / 2
    return a.slice(0, mitad)
}

// console.log(myFunction3('abcdefgh'));
// console.log(myFunction3('1234'));
// console.log(myFunction3('gedcba'));
