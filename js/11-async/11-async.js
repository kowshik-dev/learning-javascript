// ===Synchronous code ===

// JavaScript normally runs code from top to bottom, one line at a time.

// console.log("Step A");
// console.log("Step B");
// console.log("Step C");

// Output:
// Step A
// Step B
// Step C

// Each line finishes before the next line starts.


// === Asynchronous code ===

// Some tasks take time, such as:

// Timer
// API request
// Loading data
// Reading files

// JavaScript can start these tasks and continue running the remaining code.

// 

// console.log("Start");

// setTimeout(function () {
//   console.log("Timer finished");
// }, 2000);

// console.log("End");

// 

// Output:
// Start
// End
// Timer finished

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


// Task 3
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



// / //Task 4
// async function getPost() {

//     try{

//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/7")

//         const data = await response.json();

//         console.log(data.title);

//     } catch(error){

//         console.log(error);

//     }

// }

// getPost()



// //Task 5
// async function getPost() {

//     try{

//         const response = await fetch("https://jsonplaceholder.typicode.com/users/3")

//         const data = await response.json();

//         console.log(data.name);

//         console.log(data.email);

//         console.log(data.address.city)

//     } catch(error){

//         console.log(error);

//     }

// }

getPost()


//Task 6
// async function getUser(){

//     console.log("Loading...");

//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/8")
//         const data = await response.json();
//         console.log("Loaded successfully!")
//         console.log(data.username)
//         console.log(data.phone)
//         console.log(data.website)
//     } catch(error){
//         console.log(error)
//     };
// }
// getUser()


// 200 OK
// 201 Created
// 202 Accepted
// 204 No Content

// 400 Bad Request
// 401 Unauthorized
// 403 Forbidden
// 404 Not Found
// 500 Internal Server Error


// async function test() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     console.log(response);
//     console.log(response.ok);
//     console.log(response.status);
//     console.log(response.statusText);
// }

// test();







