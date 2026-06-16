//Example of if-else statement
let number = 10;  
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}  

// Example of a simple if-else statement
let temparature = 25;
if (temparature > 30){
   console.log("It's a hot day.");
}
else{
   console.log("It's a cold day.");
}

// Example of an if-else-if statement
let age1 = 18;
if (age1 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// NastedCondition (Condition inside condition)
let age2 =18;

if (age2 <=18) {

    if (age2 >=13) {
        console.log("Cannot access");
    }

    else {
        console.log("You are a child.");
    }
}

else {
    console.log("You are an adult.");
}