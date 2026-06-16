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
let score = 33;
switch (true){

   case (score >=90):
      console.log("Grade A+");
      break;

   case (score >=80 && score <90):
      console.log("Grade A");
      break;
      
   case (score >=70 && score <80):
      console.log("Grade B");
      break;
   default:
      console.log("Which is my Result.");
}