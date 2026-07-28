// Example 1: Create and print an object

const iceCreamProductA = {
  name: "Ice Cream",
  price: 100,
  inStock: true
};

console.log(iceCreamProductA);


// Example 2: Access a property using dot notation

const dessertProductB = {
  name: "Ice Cream",
  price: 1000,
  inStock: true
};

console.log(dessertProductB.inStock); // true


// Example 3: Change an object property's value using dot notation

const carProductC = {
  name: "Toyota",
  price: 1000
};

carProductC.price = 2000;

console.log(carProductC);


// Example 4: Add a new property using dot notation

const chocolateProductD = {
  name: "Chocolate"
};

chocolateProductD.price = 150;

console.log(chocolateProductD);


// Example 5: Access a property using bracket notation

const vehicleInfoE = {
  car: "Toyota",
  cost: 1000
};

console.log(vehicleInfoE["car"]); // Toyota


// Topic: Object Essentials → Nested Objects

// Object Essentials
// → Async JavaScript Basics
// → DOM Manipulation

// A nested object means:
// An object inside another object

const studentInfoAR = {
  name: "Rafi",
  age: 20,

  result: {
    subject: "JavaScript",
    score: 85
  }
};

console.log(studentInfoAR.name); // Rafi