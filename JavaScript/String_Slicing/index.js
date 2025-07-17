// string slicing = creating a substring 
//                            from a portion of another string
//                            string.slice(start, end)


const fullName = "João Silva";

/*let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(5);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);


let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);


console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/

const email = "joao36@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);


console.log(username);
console.log(extension);
