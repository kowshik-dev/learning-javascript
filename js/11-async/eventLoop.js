//===Topic: Async JavaScript → Event Loop 

//===
// Call Stack
// Browser Timer
// Task Queue
// Event Loop
//===

// Synchronous code runs first.

// Timer callback runs only after:
// 1. Its delay has finished
// 2. The call stack is empty

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");

//===
// Call Stack
// Browser Timer
// Task Queue
// Event Loop
//===

//==1==
// console.log("First")
// console.log("Third")

// JavaScript handles one task at a time on this desk.

//==2==
// setTimeout() itself is provided by the browser environment.
//it gives the timer to the browser and continues executing the next line.
// The callback does not stay on the call stack while waiting.

//==3==
// After the timer finishes, the callback becomes ready and waits inside the task queue:

//==4==
// The event loop repeatedly checks: Is the call stack empty?
// When the stack becomes empty, it moves the waiting callback from the task queue to the call stack.

//Task 1
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
  console.log("D");
}, 1000);

// Step 1:
// "A" synchronous → immediately prints

// Step 2:
// B-এর timer starts → 0 ms
// Callback task queue-তে অপেক্ষা করে

// Step 3:
// "C" synchronous → immediately prints

// Step 4:
// Main synchronous code finishes
// Call stack empty হয়

// Step 5:
// B-এর callback ready ছিল
// তাই "B" prints

// Step 6:
// 1 second পর D-এর callback ready হয়
// তাই "D" prints

