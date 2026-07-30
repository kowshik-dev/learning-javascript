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

//Task 2

const customerOrderAS = {
  orderId: 501,

  customer: {
    name: "Nabila",
    city: "Dhaka"
  },

  payment: {
    method: "Cash",
    amount: 1200
  }
};

console.log(customerOrderAS.customer.city);
console.log(customerOrderAS.payment.amount);


//Topic: Object Essentials → Updating Nested Properties
//A nested property can be updated using its complete access path.


//Task 1
const delivaryOrderAT = {
  customer: {
    name: "Kowshik",
    city: "Dhaka",
  },

  payment: {
    amount: 800,
    status: "Pending"
  }
};

delivaryOrderAT.payment.status = "Paid";

console.log(delivaryOrderAT.payment.status);


//Task 2
const bookingInfoAU = {
  guest: {
    name: "Nabila",
    city: "Dhaka"
  },

  payment: {
    method: "Card",
    amount: 1000
  }
};

bookingInfoAU.guest.city = "Chattogram";
bookingInfoAU.payment.amount = 1500;

console.log(bookingInfoAU.guest.city);
console.log(bookingInfoAU.payment.amount);


//Topic: Object Essentials → Arrays of Objects
// Real applications usually store multiple users, products, or orders as objects inside an array.

//Task 1
const productListAV = [
  {
    name: "Keyboard",
    price: 1200
  },
  {
    name: "Mouse",
    price: 700
  },
  {
    name: "Monitor",
    price: 15000
  }
];

console.log(productListAV[0]);
console.log(productListAV[2]);
console.log(productListAV[1].name);

//Task 2
const studentListAW = [
  {
    name: "Rafi",
    score: 73
  },
  {
    name: "Nabila",
    score: 90
  },
  {
    name: "Sami",
    score:82
  }
];

console.log(studentListAW[1].name);
console.log(studentListAW[1].score);  //90

//Updating an Object Inside an Array

studentListAW[1].score = 95;
console.log(studentListAW[1].score); // 95


//Task 2
const shopProductsAX = [
  {
    name: "Mouse",
    price: 700,
    inStock: true
  },
  {
    name: "Keyboard",
    price: 1200,
    inStock: true
  },
  {
    name: "Monitor",
    price: 15000,
    inStock: true
  }
];

shopProductsAX[1].price = 1500;
shopProductsAX[1].inStock = false;

console.log(shopProductsAX[1].price);
console.log(shopProductsAX[1].inStock);


//Topic: Object Essentials → Array Methods with Objects
//find()

const inventoryAY = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 }
];

const foundMouseAY = inventoryAY.find((currentProductAY) => {
  return currentProductAY.name === "Mouse";
});

console.log(foundMouseAY);
console.log(foundMouseAY.price); // 800


//Task 2
const deviceListAZ = [
  { name: "Speaker", price: 2500 },
  { name: "Monitor", price: 18000 },
  { name: "Webcam", price: 3200 }
];

const foundMonitor = deviceListAZ.find((currentDeviceList) => {
  return currentDeviceList.name === "Monitor";
});

console.log(foundMonitor.price);


//Task 3
//filter() with Objects
const courseListBA = [
  { name: "HTML", completed: true },
  { name: "JavaScript", completed: false },
  { name: "CSS", completed: true }
];

const completedCoursesBA = courseListBA.filter((currentCourseBA) => {
  return currentCourseBA.completed === true;
});

console.log(completedCoursesBA);

//Task 4
const storeItemsBB = [
  { name: "Mouse", price: 700 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 18000 },
  { name: "Cable", price: 400 }
];

const costlyItems = storeItemsBB.filter((currentItem) => {
  return currentItem.price > 1000;
});

console.log(costlyItems);


//Task 5
// map() with Objects

const employeeListBC = [
  { name: "Rafi", salary: 30000 },
  { name: "Nabila", salary: 40000 },
  { name: "Sami", salary: 35000 }
];

const employeeNamesBC = employeeListBC.map((currentEmployeeBC) => {
  return currentEmployeeBC.name;
});

console.log(employeeNamesBC);

//Task 6
const courseListBD = [
  { title: "HTML", duration: 10 },
  { title: "CSS", duration: 15 },
  { title: "JavaScript", duration: 30 }
];

const courseTiteles = courseListBD.map((currentCourse) => {
  return currentCourse.title;
});

console.log(courseTiteles);


//Object Methods
// An object method is a function that belongs to an object and can use that object’s properties.


//Task 1
const laptopProductBG = {
  name: "Laptop",
  price: 50000,

  showPriceBG: function () {
    return this.name + " costs " + this.price;
  }
};

console.log(laptopProductBG.showPriceBG());


//Task 2
const phoneProductBI = {
  name: "Samsung Phone",
  price: 45000,

  showDetailsBI: function() {
    return this.name + " costs " + this.price;
  }
};

console.log(phoneProductBI.showDetailsBI());



