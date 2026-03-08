// "use strict"; // treat all JS code as newer version

// alert(3+3) // we are using nodejs, not browser

// console.log(3
//     +
//      3) // code readablity should be high

// console.log("divya")

let name ="Divya"
let age =20
let isLoggedIn=false

// number => 2 to the power 53
// bigint 
// string =>""
// boolean=> true/false
// null => standalone value
// undefined =>
// symbol => unique

// object


// console.log(typeof "divya")
// console.log(typeof null) //object
// console.log(typeof undefined)  //undwefined



// +++++++++++++++++++++memory++++++++++++++++++++++++++++++++++

//  stack (primitive),heap (non premitive)

let myname = "Devyaniwadbude"
let anothername = myname
anothername ="divyawadbude"
console.log(anothername);
console.log(myname);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo =userOne
userTwo.email ="divya@google.com"

console.log(userOne.email);
console.log(userTwo.email);

