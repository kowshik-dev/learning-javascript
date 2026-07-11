const iceCreamProduct = {
  name: "iceCream",
  price: 100,
  inStock: true
};

console.log(iceCreamProduct);

//Example 

const product = {
    name: "Ice Cream",
    price: 1000,
    inStock: true
};

console.log(product.inStock);

//Change the value of Object property via Dot Notation

const products = {
    name: "Toyota",
    price: 1000
};

product.price = 2000;
console.log(product);

//Add new property via Dot notation

const product = {
  name: "Chocolate"
};

product.price = 150;
console.log(product);

// //bracket notation

const vahicle = {
    car: "Toyota",
    cost: 1000
};

console.log(vahicle["car"]);  //Toyota