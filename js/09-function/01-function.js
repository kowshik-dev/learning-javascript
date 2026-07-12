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

//Anonymous Function
//Task 1
// Call the function with "BD-9087"
const checkPassport = function (passportNumber) {
  console.log(`Passport ${passportNumber} is valid`);
};
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
    return "You can buy it"
  } else { return "Not enough money"
  }
};

const result = checkBudget(1500, 1200);
console.log(result);

// Final Anonymous Function Challenge

// Create an anonymous function named checkBattery.
// Requirements:
// Accept batteryLevel as a parameter.
// If the battery level is 20 or higher, return "Battery level is safe".
// Otherwise, return "Charge your device".
// Call it with 15.
// Store the returned message in a variable.
// Print that variable.


