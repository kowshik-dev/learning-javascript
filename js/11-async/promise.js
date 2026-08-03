// // ===Topic: Async JavaScript → Promise ===

// // A Promise represents a result that will be available now or later.

// //Example
// const paymentPromise = new Promise((resolve, reject) => {
//   const paymentSuccessful = true;

//   if (paymentSuccessful) {
//     resolve("Payment completed");  //arguements
//   } else {
//     reject("Payment failed");
//   }
// });

// paymentPromise                           //এই Promise-এর final result আমি handle করতে চাই।
//   .then((successMessage) => {            //.then()-এর ভিতরে একটি callback function দেওয়া হয়েছে:
//     console.log(successMessage);         //function call করা হয়নি। এটি Promise-এর সঙ্গে register বা attach করা হয়েছে।
//   })                                     //successMessage er value ashe,, resolve("Payment completed"); theke

//                                         //   resolve("Payment completed")
//                                         //                  ↓
//                                         // .then((successMessage) => {})
//                                         //                  ↓
//                                         // successMessage = "Payment completed"
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   });
//                                         //   rejectBO("Payment failed")
//                                         //               ↓
//                                         // .catch((errorMessageBO) => {})
//                                         //               ↓
//                                         // errorMessageBO = "Payment failed"

// // new Promise()
// //       ↓
// // Executor function runs immediately
// //       ↓
// // paymentSuccessful = true
// //       ↓
// // if condition → true
// //       ↓
// // resolve("Payment completed")
// //       ↓
// // Promise state: pending → fulfilled
// //       ↓
// // "Payment completed" goes to .then()
// //       ↓
// // successMessage = "Payment completed"
// //       ↓
// // console.log(successMessage)
// //       ↓
// // Output: Payment completed

// //resolve(value) → value goes into .then(parameter)
// //reject(error) → error goes into .catch(parameter)


// // executor      → technical term, keyword নয়
// // resolve       → parameter name, পরিবর্তন করা যায়
// // reject        → parameter name, পরিবর্তন করা যায়
// // handler       → technical term, keyword নয়
// // .then()       → fixed Promise method
// // .catch()      → fixed Promise method
// // .finally()    → fixed Promise method

// //  === Core logic ===
// // Promise সফল → resolve() → .then()
// // Promise ব্যর্থ → reject() → .catch()

// // Task 1
// // Create a Promise for checking an order.

// // Use:
// // const orderSuccessful = false;

// // Requirements:
// // 1. Create a Promise named orderPromise
// // 2. If orderSuccessful is true:
// //    resolve "Order completed"
// // 3. Otherwise:
// //    reject "Order failed"
// // 4. Use .then() to print the success message
// // 5. Use .catch() to print the error message

// // Expected output:
// // Order failed


// const orderPromise = new Promise((resolve, reject) => {
//     const orderSuccessful = false;

//     if (orderSuccessful) {
//         resolve("Order completed");
//     } else {
//         reject("Order failed");
//     }
// });

// orderPromise
// .then((successMessage) => {
//     console.log(successMessage);
// })

// .catch((errorMessage) => {
//     console.log(errorMessage);
// });


// //Task 2

// // Promise creation
// const parcelPromise = new Promise((resolve, reject) => {         //new Promise(...) → produces the future result
//     const percelDelivered = true;

//     if(percelDelivered) {
//         resolve("Parcel Delivered");
//     } else{ 
//         reject("Parcel Not Delivered");
//     }
// });

// // Promise consumption
// parcelPromise
// .then((successMessage) => {                                     //.then()/.catch() → consumes and handles that result
//     console.log(successMessage);
// })

// .catch((errorMessage) => {
//     console.log(errorMessage);
// });


//  //Task 3

// const productList = new Promise((resolve, reject) => {
//  let productsAvaoilable = false;

//     if (productsAvaoilable) {
//       resolve("Products are available");
//     } else {
//       reject("No products available");
//     }
//   });

//   productList
//     .then((messageTrue) => {
//       console.log(messageTrue);
//     })
//     .catch((error) => {
//       console.log(error);
//     });


// // //Task 4
// const users = new Promise((resolve, reject) => {
//     const userLoggedIn = true;

//     if (userLoggedIn) {
//         resolve ("Wellcome Back Alise!");
//     } else {
//         reject ("Please log in to first");
//     }
// });

// users
// .then((messageTrue) => {
//     console.log(messageTrue);
// })
// .catch((error) => {
//     console.log(error);
// });


// // Task 5
// const myPromise = new Promise((resolve, reject) => {
//   resolve("Promise completed!");
// });

// myPromise.then((data) => {
//   console.log(data);
// });

// const studentPromise = new Promise((resolve, reject) => {
//     resolve("Stuent registered successfully!");
// });

// studentPromise.then((status) => {
//     console.log(status);
// });

// //  == setTimeout == Promise

// //Task 6
// const dataPromise = new Promise((resolve, reject) => {

//     console.log("Fetching data...");

//     setTimeout(() => {
//         resolve("Data received successfully!");
//     }, 3000);

// });

// dataPromise
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });


// // //Task 7
// const downloadPromise =  new Promise((resolve, reject) => {
//     console.log("Downloading file...");

//     setTimeout(() => {
//         resolve("File downloaded successfully!");
//     },2000);
// });

// downloadPromise 
// .then((successMessage) => {
//     console.log(successMessage);
// })

// .catch((errorMessage) => {
//     console.log(errorMessage);
// });


// // //Task 8

// const loginPromise = new Promise((resolve, reject) => {
//     console.log("Checking login...");

//     setTimeout(() => {

//         let loginSuccess = true;

//         if(loginSuccess) {
//             resolve("Welcome User!");
//         } else {
//             reject("Login failed!");
//         }
//     },2000);
// });

// loginPromise
// .then((successLogin) => {
//     console.log(successLogin);
// })

// .catch((errorLogin) => {
//     console.log(errorLogin);
// });


// // // ===Promise Chaining===

// // // Task 9
// const loginPromiseZ = new Promise((resolve, reject) => {

//     resolve("Login successful!");

// });


// loginPromiseZ
// .then((message) => {

//     console.log(message);

//     return "User data loaded!";

// })
// .then((userData) => {

//     console.log(userData);

// });


// // //Task 10
// const orderPromiseE = new Promise((resolve, reject) => {
//     resolve("Order Placed!");
// });

// orderPromiseE
// .then((message) => {
//     console.log(message);

//     return "Preparing your order....";
// })
// .then((processingMessage) => {
//     console.log(processingMessage);
// });


// // // ===Promise chaining with multiple async operations===


// // // Task 11
// const loginUser = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("User logged in");
//     }, 1000);

// });


// loginUser
// .then((message) => {

//     console.log(message);

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("User ID: 101");
//         }, 4000);

//     });

// })
// .then((userId) => {

//     console.log(userId);

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve("Profile loaded");
//         }, 5000);

//     });

// })
// .then((profile) => {

//     console.log(profile);

// });



// // Task 12
// const buyProduct = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Product perchased!");
//     },6000);
// });

// buyProduct
// .then((message) => {
//     console.log(message);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Payment completed!");
//         },7000);
//     });
// })

// .then((secondMessage) => {
//     console.log(secondMessage);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Product shipped");
//         },8000);
//     });
// })

// .then((thirdMessage) => {
//     console.log(thirdMessage);
// });


// // // ===Fetch API + Promise ===

// // // fetch() sends a request to a server.


// // // Task 13

// fetch("https://jsonplaceholder.typicode.com/users/1")  // fetch() itself returns a Promise.

// .then((response) => {  //inside response there are data from server by promise === but not directly useable yet. 

//     return response.json(); //Because server sends data as JSON format. .json() also returns a Promise.

// })

// .then((userData) => {    //for recive actual data from promise. kinda extract and open

//     console.log(userData);

// })

// .catch((error) => {

//     console.log(error);

// });


// // // Task 14
// fetch("https://jsonplaceholder.typicode.com/posts/1")

// .then((response) => {
//     return response.json();
// })

// .then((userData) => {
//     console.log (userData);
// })

// .catch((error) => {
//     console.log(error);
// });


// // // Task 15
// fetch("https://jsonplaceholder.typicode.com/posts/1")

// .then((response) => {

//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }

//     return response.json();

// })

// .then((data) => {
//     console.log(data);
// })

// .catch((error) => {
//     console.log(error.message);
// });

// //Task 16
// function getUser() {

//   return new Promise((resolve) => {
    
//     setTimeout(() => {
//       resolve({ id: 1, name: "Kowshik" });
//     }, 500);
//   });
// }

// getUser()
// .then((message) => {
//     console.log(message.name);
// })
// .catch((error) => {
//     console.log(error);
// });


//Task 17
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Something went wrong");  //new Error() creates an Error object.
//     }                                           
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });


// Task 18
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      return Promise.reject(
        new Error("Something went wrong")
      );
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });


//   Task 19
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      console.log("Something went wrong");
      return;
    }

    return response.json();
  })
  .then((data) => {
    if (data) {
      console.log(data);
    }
  });