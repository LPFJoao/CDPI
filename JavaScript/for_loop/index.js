// for loop = repeat some code a LIMITED amount of times
/*
for(let i = 0; i <= 2; i++) {
    console.log("Hello World ");
}
console.log("Happy1")
for(let i = 0; i <= 2; i++) {
    console.log(i);
}
console.log("Happy2")
for(let i = 0; i < 10; i++) {
   console.log(i);
}
console.log("Happy3")
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy4")

for(let i = 10; i > 0; i-=2) {
    console.log(i);
}
console.log("Happy5")
for(let i = 0; i < 10; i+=2) {
   console.log(i);
}
console.log("Happy6") */

for(let i = 1; i <= 10; i++) {
   console.log(i);
}
console.log("Happy")

for(let i = 1; i <= 10; i++) {
    if(i == 7) {
        continue;
    }
    else{
   console.log(i);
    }
}
console.log("Happy")

for(let i = 1; i <= 10; i++) {
    if(i == 7) {
        break;
    }
    else{
   console.log(i);
    }
}
console.log("Happy")