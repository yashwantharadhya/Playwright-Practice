"use strict";
let message1 = "Hello, World!"; //this is simple variable in typescript
message1 = "bye"; // this will cause a type error because message1 is declared as a string
let age1 = 30; // this is a number variable in typescript
function add(a, b) {
    return a + b; // this function takes two numbers and returns their sum
}
console.log(add(5, 10)); // this will return 15
let user = {
    name: "John",
    age: 25,
    isStudent: true
}; // this is an object in t
// 
user.location = "New York"; // this will cause an error because location is not defined in the user object
console.log(user.name); // this will print "John"
console.log(user.age); // this will print 25
console.log(user.isStudent); // this will print true    
