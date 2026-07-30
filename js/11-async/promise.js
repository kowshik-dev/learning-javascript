// ===Topic: Async JavaScript → Promise ===

// A Promise represents a result that will be available now or later.

//Example
const paymentPromise = new Promise((resolve, reject) => {
  const paymentSuccessful = true;

  if (paymentSuccessful) {
    resolve("Payment completed");  //arguements
  } else {
    reject("Payment failed");
  }
});

paymentPromise                           //এই Promise-এর final result আমি handle করতে চাই।
  .then((successMessage) => {            //.then()-এর ভিতরে একটি callback function দেওয়া হয়েছে:
    console.log(successMessage);         //function call করা হয়নি। এটি Promise-এর সঙ্গে register বা attach করা হয়েছে।
  })                                     //successMessage er value ashe,, resolve("Payment completed"); theke

                                        //   resolve("Payment completed")
                                        //                  ↓
                                        // .then((successMessage) => {})
                                        //                  ↓
                                        // successMessage = "Payment completed"
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
                                        //   rejectBO("Payment failed")
                                        //               ↓
                                        // .catch((errorMessageBO) => {})
                                        //               ↓
                                        // errorMessageBO = "Payment failed"

// new Promise()
//       ↓
// Executor function runs immediately
//       ↓
// paymentSuccessful = true
//       ↓
// if condition → true
//       ↓
// resolve("Payment completed")
//       ↓
// Promise state: pending → fulfilled
//       ↓
// "Payment completed" goes to .then()
//       ↓
// successMessage = "Payment completed"
//       ↓
// console.log(successMessage)
//       ↓
// Output: Payment completed

//resolve(value) → value goes into .then(parameter)
//reject(error) → error goes into .catch(parameter)


// executor      → technical term, keyword নয়
// resolve       → parameter name, পরিবর্তন করা যায়
// reject        → parameter name, পরিবর্তন করা যায়
// handler       → technical term, keyword নয়
// .then()       → fixed Promise method
// .catch()      → fixed Promise method
// .finally()    → fixed Promise method

//  === Core logic ===
// Promise সফল → resolve() → .then()
// Promise ব্যর্থ → reject() → .catch()

// Task 1
// Create a Promise for checking an order.

// Use:
// const orderSuccessful = false;

// Requirements:
// 1. Create a Promise named orderPromise
// 2. If orderSuccessful is true:
//    resolve "Order completed"
// 3. Otherwise:
//    reject "Order failed"
// 4. Use .then() to print the success message
// 5. Use .catch() to print the error message

// Expected output:
// Order failed


const orderPromise = new Promise((resolve, reject) => {
    const orderSuccessful = false;

    if (orderSuccessful) {
        resolve("Order completed");
    } else {
        reject("Order failed");
    }
});

orderPromise
.then((successMessage) => {
    console.log(successMessage);
})

.catch((errorMessage) => {
    console.log(errorMessage);
});


//Task 2

// Promise creation
const parcelPromise = new Promise((resolve, reject) => {
    const percelDelivered = true;

    if(percelDelivered) {
        resolve("Parcel Delivered");
    } else{ 
        reject("Parcel Not Delivered");
    }
});

// Promise consumption
parcelPromise
.then((successMessage) => {
    console.log(successMessage);
})

.catch((errorMessage) => {
    console.log(errorMessage);
});
