//Single Perameter
function welcomeUser(userName) {
  console.log(`Welcome, ${userName}`);
}

// write the function call
welcomeUser("Nadia");

//Single Perameter
function greetPlayer(playerName){
  console.log(`Hello, ${playerName}`)
}

greetPlayer("Rafi");

//Multiple Perameter
function semiFinal(teamA , teamB ){
  console.log(`${teamA} VS ${teamB}`)
}

semiFinal( "Brazil", "Argentina");

//Function Declearation
//Task 1
function showBooking(guestName, roomNumber){
  console.log(`${guestName} booked room ${roomNumber}`);
}

showBooking("Nadia", 405);

//Task 2
function reportWeather(cityName, temperature){
  console.log(`${cityName} temperature is ${temperature}`);
}

reportWeather("Sylhet", "28*C");

//return //task1
function calculateTripCost(ticketPrice, passengers){
  return ticketPrice*passengers;
}
const totalCost = calculateTripCost(750,4);
console.log(`Total trip cost is ${totalCost}`);

//task2
function calculateStorage(fileSize, numberOfFiles){
  return fileSize*numberOfFiles;
}
const totalStorage = calculateStorage(200, 5);
console.log(`Total storage required is ${totalStorage} MB`);

//Regular Function
function calculatePower(voltage, current){
  return voltage*current;
}

const power = calculatePower(220,5);
console.log(`${power} watts`);

//task 3
// Call with 800 and 3
// Store the result in totalInternetCost
// Print: Total internet cost: 2400 BDT

function calculateInternetCost(monthlyCost, months) {
  return monthlyCost * months;
}
const totalInternetCost = calculateInternetCost(800, 3);
console.log(`Total internet cost: ${totalInternetCost} BDT`);

//Task 3
// Create a regular function named calculatePrintingCost.

// It should:
// accept numberOfPages and costPerPage
// return the total cost
// call the function with 80 pages and 3 BDT per page
// store the returned result
// print:

function calculatePrintingCost(numberOfPages, costPerPage) {
  return numberOfPages * costPerPage;
}

const cost = calculatePrintingCost(80, 3);
console.log(`Total printing cost: ${cost} BDT`);

//Task 4
// Regular Function — Combination Challenge

// Create a regular function named checkExamResult.
// Requirements:
// Accept marks as a parameter.
// If marks are 50 or higher, return "Passed".
// Otherwise, return "Failed".
// Call the function with 72.
// Store the returned result in a variable.
// Print: Exam result: Passed

function checkExamResult (marks){
  if( marks >= 50 ){
    return "Passed";
  } else {
    return "Failed"
  }
}

const checkResult = checkExamResult(72);
console.log(`Exam result: ${checkResult}`);


//Anonymous Function
//Task 1
// Call the function with "BD-9087"
function checkPassport(passportNumber) {
  console.log(`Passport ${passportNumber} is valid`);
}
checkPassport("BD-9087");

//Task 2 
//Create an anonymous function named checkBoardingPass.
// It should:
// accept passengerName and gateNumber
// print: Nadia, proceed to Gate 7
// use a template literal
// be called with "Nadia" and 7

const checkBoardingPass = function (passengerName, gateNumber){
  console.log(`${passengerName}, process to gate ${gateNumber}`);
};
checkBoardingPass("Nadia", 7);

//Task 3 — Combination Challenge

// Create an anonymous function named checkBudget.
// It should:
// accept budget and itemPrice
// return "You can buy it" when the budget is enough
// otherwise return "Not enough money"
// store the returned result in a variable
// print that variable
// Call it using 1500 and 1200.

const checkBudget = function(budget, itemPrice){

  if (budget >= itemPrice){
    return "You can buy it";
  } else { return "Not enough money";
  }
};

const result = checkBudget(1500, 1200);
console.log(result);

//Task 4
// Final Anonymous Function Challenge

// Create an anonymous function named checkBattery.
// Requirements:
// Accept batteryLevel as a parameter.
// If the battery level is 20 or higher, return "Battery level is safe".
// Otherwise, return "Charge your device".
// Call it with 15.
// Store the returned message in a variable.
// Print that variable.

const checkBattery = function (batteryLevel){
  if (batteryLevel >= 20){
    return "Battery level is safe";
  } else {return "Charge your device";
  }
};

const check = checkBattery(15);
console.log(check);


//Arrow Function

//Task 1

// Call with 250 and 4
// Store the result in totalMealCost
// Print: Total meal cost: 1000 BDT

const calculateMealCost = (mealPrice, numberOfMeal) => {
  return mealPrice * numberOfMeal;
};

const totalMealCost = calculateMealCost(250, 4);
console.log(`Total meal cost ${totalMealCost} BDT`);


// Task 2 — Independent Practice

// Create an arrow function named calculateParkingFee.
// Requirements:
// Accept hours and feePerHour.
// Return the total parking fee.
// Call it with 6 hours and 50 BDT per hour.
// Store the returned result.
// Print:

const calculateParkingFee = (hours, feePerHour) => {
  return hours * feePerHour;
};

const totalFee = calculateParkingFee(6, 50);
console.log(`Total parking fee: ${totalFee} BDT`);

//Task 3 Arrow Function — Combination Challenge

// Create an arrow function named checkAltitude.
// Requirements:
// Accept altitude as a parameter.
// If altitude is 3000 or higher, return "High altitude warning".
// Otherwise, return "Altitude is safe".
// Call it with 3500.
// Store and print the returned result.

const checkAltitude = (altitude) => {
  if( altitude >= 3000 ) {
    return "High altitude warning"
  } else { return "Altitude is safe"
  }
};

const checkingResult = checkAltitude(3500);
console.log(checkingResult);

//Arrow Function: Implicit Return  
//when func contain onle 1 expression,
//remove //{}
//remove //return (keyword)



//Task 1 — Independent Practice

// Create an implicit-return arrow function named calculateSolarEnergy.
// It should:
// accept panelOutput and hours
// multiply them
// return the result automatically
// call it with 300 and 5
// store and print the result as:

const calculateSolarEnargy = (panelOutput, hours) => panelOutput * hours;
const reportOfEnergy = calculateSolarEnargy(300, 5);
console.log(`Total energy: ${reportOfEnergy}`);


//Arrow Function Topic: One Parameter

//Task 1

// Create the shortest valid arrow function named convertDaysToHours.
// It should:
// accept one parameter: days
// return days * 24
// call it with 7
// store and print the result.

const convertDaysToHours = days => days * 24;
const convertValue = convertDaysToHours(7);
console.log(convertValue);

//Arrow Function with Zero Parameters

//Task 1
const getLaunchStatus = () => "Rocket is ready";

// Call the function
// Store its result in launchStatus
// Print launchStatus

const launchStatus = getLaunchStatus();
console.log(launchStatus);

