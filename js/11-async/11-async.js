// ======================================================
// 1. SYNCHRONOUS CODE
// ======================================================

// Synchronous code runs from top to bottom.
// One line finishes before the next line starts.

// console.log("Step A");
// console.log("Step B");
// console.log("Step C");

// Output:
// Step A
// Step B
// Step C


// ======================================================
// 2. ASYNCHRONOUS CODE WITH setTimeout()
// ======================================================

// setTimeout() starts a timer.
// JavaScript does not wait for the timer.

// console.log("Start");

// setTimeout(() => {
//   console.log("Timer finished");
// }, 2000);

// console.log("End");

// Output:
// Start
// End
// Timer finished


// ======================================================
// TASK 1: FETCH A POST
// ======================================================

async function fetchFirstPostA() {
  try {
    // fetch() returns a Promise.
    // await waits for the Promise result.
    const responseA = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // fetch() does not automatically throw an error
    // for HTTP errors such as 404 or 500.
    if (!responseA.ok) {
      throw new Error(`Request failed with status ${responseA.status}`);
    }

    // response.json() also returns a Promise.
    // await converts the JSON response into usable JavaScript data.
    const postDataA = await responseA.json();

    console.log(postDataA);
  } catch (errorA) {
    console.log(errorA.message);
  }
}

fetchFirstPostA();

//Task 1
async function getPost(){                 //async function always returns a Promise.

    const response = await fetch(        //wait until this Promise finishes, then give me the result.
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    const data = await response.json();

    console.log(data);

}

getPost();

// before:
//             fetch()
//              ↓
//            .then(response)

//now: 
//            await fetch()
//              ↓
//            response


//Task 2
async function getUsrData() {          //async function return a promise

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");  //wait untill promise finished

        const data = await response.json();

        console.log(data);

    } catch(error){

        console.log(error);
    }
}

getUsrData()


// ======================================================
// TASK 2: 
// ======================================================
async function getPost() {

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/5")

        const data = await response.json();

        console.log(data);

    } catch(error){

        console.log(error);

    }

}

getPost()



// ======================================================
// TASK 3: 
// ======================================================
async function getPost() {

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/7")

        const data = await response.json();

        console.log(data.title);

    } catch(error){

        console.log(error);

    }

}

getPost()



// ======================================================
// TASK 4: 
// ======================================================
async function getPost() {

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users/3")

        const data = await response.json();

        console.log(data.name);

        console.log(data.email);

        console.log(data.address.city)

    } catch(error){

        console.log(error);

    }

}

getPost()


// ======================================================
// TASK 5: 
// ======================================================
async function getUser(){

    console.log("Loading...");

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/8")
        const data = await response.json();
        console.log("Loaded successfully!")
        console.log(data.username)
        console.log(data.phone)
        console.log(data.website)
    } catch(error){
        console.log(error)
    }
}
getUser()


// ======================================================
// COMMON HTTP STATUS CODES
// ======================================================

// Successful responses:
//
// 200 → OK
// 201 → Created
// 202 → Accepted
// 204 → No Content
//
// Client errors:
//
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
//
// Server error:
//
// 500 → Internal Server Error


async function test() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    console.log(response.statusText);
}

test();







