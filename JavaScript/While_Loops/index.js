// while loop = repeat some code WHILE some condition is true


/*
let username = "";

do{
    username = window.prompt("Please enter your name: ");
}while(username === "" || username === null)

console.log(`Hello, ${username}!`); */

let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Please enter your username: ");
    password = window.prompt("Please enter your password: ");

    if(username === "admin" && password === "1234"){
        loggedIn = true;
        console.log("Welcome, admin!");
    }
    else{
        console.log("Invalid username or password. Please try again.");
    }
}while(!loggedIn)