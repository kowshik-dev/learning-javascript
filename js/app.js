// Example of a comment in JavaScript
// This is a single-line comment

/* This is a multi-line comment
   that spans multiple lines */

// Example of a console log statement
console.log("Hello, World!"); // This will print "Hello, World!" to the console

// Example of a variable declaration and assignment
let name = "Alice";
console.log(name); // This will print "Alice" to the console

// Example of typeof operator
console.log(typeof 42); // number
console.log(typeof 3.14); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined

// Examples of integers
console.log(3);
console.log(5);
console.log(-67);

// Examples of floating point numbers
console.log(3.14);
console.log(7.2);
console.log(-14.5);

// Example of a string using double quotes
console.log("I love to code!");

// Example of a string using single quotes
console.log('JavaScript is fun!');

// Example of a boolean value
console.log(true);
console.log(false);

// Example of a null value
console.log(null);

// Example of an undefined value
console.log(undefined);

// Example of a variable declaration without initialization
let age;
console.log(age); // undefined

// Example of a variable declaration with initialization
let score = 10;
console.log(score); // 10
score = 20;
console.log(score); // 20

// Example of a constant variable
const PI = 3.14159;
// console.log(PI); // 3.14159
// PI = 3.14; // This will cause an error because PI is a constant
// console.log(PI); // This line will not be executed due to the error above

// Example of arithmetic operations
console.log(5 + 3); // Addition
console.log(10 - 4); // Subtraction
console.log(6 * 7); // Multiplication
console.log(20 / 5); // Division 

// Example of compound assignment operators
let x = 10;
x += 5; // x is now 15
let remainder = 10 % 3; // remainder is 1
let count = 5;
count += 1; // count is now 6
count -= 1; // count is now 5

// Example of comparison operators
console.log(5 > 3); // true
console.log(2 < 4); // true
console.log(7 >= 7); // true
console.log(10 <= 9); // false
console.log(5 === 5); // true
console.log(5 !== 3); // true   

// Example of logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false    

//Example of truthy and falsy values
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(false)); // false
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true      

//Example of if-else statement
let number = 10;  
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}  

// Example 2
let XM = false;
if (XM) {
   console.log("XM is true.");
} else {
   console.log("XM yet to come.")
}

// Example 3
let temparature = 25;
if (temparature > 30){
   console.log("It's a hot day.");
}
else{
   console.log("It's a cold day.");
}

// Example 3
let age1 = 18;
if (age1 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Example of a switch statement
let color = "red";

switch (color) {

   case "Green":
      console.log("The color is green");
      break;

   case "pink":
      console.log("The color is pink");
      break;

   case "red":
      console.log("The color is red");
      break;

   default:
      console.log("Unknown color");   
}

// Example 2
let score1 = 33;
switch (true){

   case (score1 >=90):
      console.log("Grade A+");
      break;

   case (score1 >=80 && score1 <90):
      console.log("Grade A");
      break;
      
   case (score1 >=70 && score1 <80):
      console.log("Grade B");
      break;
   default:
      console.log("Which is my Result.");
}