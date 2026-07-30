

// Topic: Async JavaScript → setTimeout() 


// syntex === setTimeout(callbackFunction, delay);

// callbackFunction → which function will run later
// delay            → how long JavaScript waits, in milliseconds

//regularEdition
setTimeout(function() {
    console.log("Order confirmed");
},2000); //order confirmed after 2 seconds

//arrowFunction Edition
setTimeout(() => {
  console.log("Order confirmed");
}, 2000);