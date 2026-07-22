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

for (let fareIndex = 0; fareIndex < rideFare.length; fareIndex++){
  fareTotal += rideFare[fareIndex];
}
console.log(fareTotal);


//for...of loop

const rideFareQ = [60, 90, 40, 110];

let fareTotalQ = 0;

for (const currentFareQ of rideFareQ) {
  fareTotalQ += currentFareQ;
}

console.log(fareTotalQ); // 300