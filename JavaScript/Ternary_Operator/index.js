// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
// //                                  condition ? codeIfTrue : codeIfFalse;

// let age = 12;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
// console.log(greeting);

//let isStudent = false;
//let message = isStudent ? "You are a Student" : "You are not a Student";
//console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)