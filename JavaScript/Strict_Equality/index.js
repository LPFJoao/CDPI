//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14;

// ------ == --------
// Comparison operator checks if values are equal
// It performs type coercion, meaning it converts types to compare them
// For example, comparing a number with a string will return true if they are equivalent in value
// In this case, 3.14 (number) is equal to "3.14" (string) after type coercion
// However, this can lead to unexpected results if not careful
// For example, comparing a number with a boolean will return false
// because 3.14 is not equivalent to true (which is 1 in JavaScript
// This is why it is recommended to use strict equality (===) instead of loose equality (==)
// to avoid unexpected results due to type coercion

if(PI == "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

// ------ == --------
// Comparison operator checks if values are equal
// It performs type coercion, meaning it converts types to compare them
// For example, comparing a number with a string will return true if they are equivalent in value
// In this case, 3.14 (number) is equal to "3.14" (string) after type coercion
// However, this can lead to unexpected results if not careful
// For example, comparing a number with a boolean will return false
// because 3.14 is not equivalent to true (which is 1 in JavaScript

if(PI === "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

// ------ === --------
// Strict equality operator checks if values & datatype are equal
// It does not perform type coercion, meaning it does not convert types to compare them
// For example, comparing a number with a string will return false
// In this case, 3.14 (number) is not equal to "3.14" (string)
if(PI === 3.14){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

// ------ != --------
// Inequality operator checks if values are not equal
// Strict inequality operator checks if values & datatype are not equal

if(PI != "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}

// ------ !== --------
// Strict inequality operator checks if values & datatype are not equal
// It does not perform type coercion, meaning it does not convert types to compare them

if(PI !== "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}