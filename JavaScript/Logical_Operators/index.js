// logical operators =  used to combine or manipulate Boolean values 
//                                    (true or false)

// AND = &&
// OR  = ||
// NOT = !

// ---------- EXAMPLE 1 ----------
const temp = 25;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

// ---------- EXAMPLE 2 ----------
const temps = -250;

if(temps <= 0 || temps > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

// ---------- EXAMPLE 3 ----------
const isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}