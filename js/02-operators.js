// Example of typeof operator
console.log(typeof 42); // number
console.log(typeof 3.14); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined

let x = 10;
let y = 3;

console.log(x + y);  // 13  (Addition)
console.log(x - y);  // 7   (Subtraction)
console.log(x * y);  // 30  (Multiplication)
console.log(x / y);  // 3.3333... (Division)
console.log(x % y);  // 1    (modulus/Remainder)

// Example of compound assignment operators
let z = 10;
z += 5; // z is now 15
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

console.log("5" == 5);  // true (Loose: Only checks value, ignores type.)
console.log("5" === 5); // false (Strict: Checks both the value AND the data type)

