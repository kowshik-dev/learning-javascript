// ===Topic: Async JavaScript → Promise ===

// A Promise represents a result that will be available now or later.

// You order food
// → restaurant promises to deliver

// Later:
// fulfilled → food delivered
// rejected  → order failed

// A Promise has three states:
// pending   → কাজ এখনো চলছে
// fulfilled → কাজ সফল হয়েছে
// rejected  → কাজ ব্যর্থ হয়েছে

const orderPromise = new Promise((resolve, reject) => {
  const orderSuccessful = true;

  if (orderSuccessful) {
    resolve("Order delivered");
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