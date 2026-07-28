//for loop
//A for loop repeats code while a condition stays true.

for (let ticketNumberL = 1; ticketNumberL <= 5; ticketNumberL++) {
  console.log(`Ticket ${ticketNumberL}`);
}

//Task 1
//basic for loop
// Write a for loop that prints:

// Bus 1
// Bus 2
// Bus 3
// Bus 4

for (let bus = 1; bus <= 4; bus++) {
  console.log(`Bus Number ${bus}`);
}

//Task 2

// increase by 2
// Print:
// Seat 2
// Seat 4
// Seat 6
// Seat 8

for (let seatNumberM = 2; seatNumberM <= 8; seatNumberM += 2) {
  console.log(`Seat ${seatNumberM}`);
}

//Task 3
// countdown
// Write a loop that prints:

// Launch 5
// Launch 4
// Launch 3
// Launch 2
// Launch 1

for (let launchCountN = 5; launchCountN >= 1; launchCountN--) {
  console.log(`Launch ${launchCountN}`);
}

//Task 4
// Next practical loop task: calculate a total

const prices = [120, 80, 200, 50]; //array

let totalPrice = 0; //running total/accumulator

for (let priceIndex = 0; priceIndex < prices.length; priceIndex++) {
  // Add the current price to totalPrice
  console.log(prices[priceIndex]); //priceIndex-এর বর্তমান value ব্যবহার করে array থেকে একটি price বের করছে।
  totalPrice += prices[priceIndex]; //index theke ber kore + kore kore totalPrice e rakhche.
}

console.log(totalPrice);

//Task 5

// Add all values from this array using a for loop:
// const rideFares = [60, 90, 40, 110];
// Use these variable names:
// fareTotal
// fareIndex

//
const rideFare = [60, 90, 40, 110];

let fareTotal = 0;

for (let fareIndex = 0; fareIndex < rideFare.length; fareIndex++) {
  fareTotal += rideFare[fareIndex];
}
console.log(fareTotal);

//for...of loop//

const rideFareQ = [60, 90, 40, 110];

let fareTotalQ = 0;

for (const currentFareQ of rideFareQ) {
  fareTotalQ += currentFareQ;
}

console.log(fareTotalQ); // 300

//Task 1

// Add all values from this array using a for...of loop:
// const mealCostsR = [150, 220, 90, 140];
// Use:
// mealTotalR
// currentCostR
// Rules:
// Start mealTotalR at 0
// Do not use an index
// Add currentCostR to mealTotalR during each round
// Expected output:
// 600

const mealCostR = [150, 220, 90, 140];  //declear array

let mealTotalR = 0;  //create a box which may i call variable

for (const currentCostR of mealCostR){  //for..of loop where i didnt mention value inside array not index 
  mealTotalR += currentCostR;  // got a result from like mealTotalR = mealTotal + 150 for the first one and put it in mealTotalR
}

console.log(mealTotalR); //600 //print the variable which meaan box

//Excercise
const waterCost = [150, 220, 230, 500];

let totalWaterCost = 0;

for (const water of waterCost){
  totalWaterCost += water;
}

console.log(totalWaterCost);


//condition inside a loop//

//Example: add only prices greater than 100.
const itemPricesS = [80, 150, 60, 200];

let expensiveTotalS = 0;

for (const currentPriceS of itemPricesS) {
  if (currentPriceS > 100) {
    expensiveTotalS += currentPriceS;
  }
}

console.log(expensiveTotalS); // 350

//Example
const deliveryFeesT = [30, 70, 45, 90, 50];

let qualifiedTotalT = 0;

for (const currentFeeT of deliveryFeesT) {
  if (currentFeeT >= 50) {
    qualifiedTotalT += currentFeeT;
  }
}

console.log(qualifiedTotalT);

//explain

// Step 1:
// deliveryFeesT তৈরি হলো → [30, 70, 45, 90, 50]

// Step 2:
// qualifiedTotalT তৈরি হলো → 0

// Step 3:
// Loop প্রথম value নিল → 30
// currentFeeT = 30

// Step 4:
// 30 >= 50 → false
// তাই value add হলো না

// Step 5:
// Loop দ্বিতীয় value নিল → 70
// currentFeeT = 70

// Step 6:
// 70 >= 50 → true

// Step 7:
// qualifiedTotalT += currentFeeT
// qualifiedTotalT = 0 + 70
// qualifiedTotalT = 70

// Step 8:
// Loop তৃতীয় value নিল → 45
// currentFeeT = 45

// Step 9:
// 45 >= 50 → false
// তাই value add হলো না

// Step 10:
// Loop চতুর্থ value নিল → 90
// currentFeeT = 90

// Step 11:
// 90 >= 50 → true

// Step 12:
// qualifiedTotalT = 70 + 90
// qualifiedTotalT = 160

// Step 13:
// Loop পঞ্চম value নিল → 50
// currentFeeT = 50

// Step 14:
// 50 >= 50 → true

// Step 15:
// qualifiedTotalT = 160 + 50
// qualifiedTotalT = 210

// Final:
// qualifiedTotalT = 210

//Task 1

// Add only the scores that are 60 or higher.

// const examScoresU = [45, 75, 60, 30, 90];
// Use:
// passedTotalU
// currentScoreU
// Requirements:
// Use a for...of loop
// Use an if condition
// Start passedTotalU at 0
// Add only values >= 60
// Expected output:
// 225

const examScoresU = [45, 75, 60, 30, 90];

let passedTotalU = 0;

for (const currentScoreU of examScoresU){
  if (currentScoreU >= 60){
    passedTotalU += currentScoreU
  }
}

console.log(passedTotalU);  //225 and i  did it.

//Task 2

// Count how many scores are 60 or higher. Do not add the score values.

// const testScoresV = [55, 80, 72, 40, 60, 95];

// Use:
// passedCountV
// currentScoreV

// Requirements:
// Start passedCountV at 0
// Use for...of
// Use an if condition
// When a score is >= 60, increase passedCountV by 1
// Expected output:
// 4

const testScoresV = [55, 80, 72, 40, 60, 95];

let passedCountV = 0;

for (const currentScoreV of testScoresV){
  if(currentScoreV >= 60){
    passedCountV +=1
  }
}

console.log(passedCountV);

//Task 3 Combined task

// From this array, calculate:

// How many order values are 100 or higher
// The total of those qualifying order values
// const orderValuesW = [80, 150, 220, 60, 160];

// Use:
// largeOrderCountW
// largeOrderTotalW
// currentOrderW

// Requirements:
// Use one for...of loop
// Use one if condition
// Increase largeOrderCountW by 1
// Add currentOrderW to largeOrderTotalW

// Expected output:
// Count: 3
// Total: 530

const orderValuesW = [80, 150, 220, 60, 160];

let largeOrderCountW = 0;
let largeOrderTotalW = 0;

for (const currentOrderW of orderValuesW){
  if (currentOrderW >= 100){
    largeOrderCountW +=1;
    largeOrderTotalW += currentOrderW;
  } 
}
console.log(largeOrderCountW);
console.log(largeOrderTotalW );// 5, 530 and yessssssss i did it man!



//forEach() loop


//regular
const pricesX = [100, 200, 300];

for (const currentPriceX of pricesX) {
  console.log(currentPriceX);
}

//forEach
const pricesZ = [400, 500, 600];

pricesZ.forEach((currentPriceX) => {
  console.log(currentPriceX);
});

//Task 1

const studentNameY = ["Kowshik", "Mawa"];

studentNameY.forEach((currentStudentY) => {
  console.log(`Student: ${currentStudentY}`);
});

//Task 2

const cartPriseZ = [120, 90, 200];

let cartTotalZ = 0;

cartPriseZ.forEach((currentPriseZ) => {
  cartTotalZ += currentPriseZ;
});

console.log(cartTotalZ);

//Task 3'

const texiFare = [70, 120, 90, 50];

let fareTotalA = 0;

texiFare.forEach((currentFare) => {
  fareTotalA += currentFare;
});

console.log(fareTotalA);


//Topic map()

// map work with array and create a brand new array

const basePricesAB = [100, 200, 300];

const discountedPricesAB = basePricesAB.map((currentPriceAB) => {
  return currentPriceAB * 0.9;
});

console.log(discountedPricesAB);

//Task 2

const deliveryFeesAC = [50, 80, 120];

const updateFeesAC = deliveryFeesAC.map((currentFeesAC) => {
  return currentFeesAC + 10;
});

console.log(updateFeesAC);

updateFeesAC.forEach((currentUpdatedFeeAC) => {
  console.log(currentUpdatedFeeAC);
});


//Topic Filter

const temperaturesAF = [28, 35, 30, 40, 25];

const highestTemperature = temperaturesAF.filter((temperature) => {
  return temperature > 30;
});

console.log(highestTemperature);

//Task 2

const stockAmountsAG = [0, 12, 5, 0, 8];

const availableStock = stockAmountsAG.filter((stockAG) =>{
  return stockAG > 0;
});

console.log(availableStock);


//Task 3
//filter() with strings

const customerNamesAH = ["Rafi", "Nabila", "Sami", "Farhan", "Mia"];

const longnameAH = customerNamesAH.filter((currentNameAH) => {
  return currentNameAH.length > 4;
});

console.log(longnameAH);


//Loops and Array Iteration → find()