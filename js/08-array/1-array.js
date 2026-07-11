//Nested Array
const data = [
  ["Rahim", 20],
  [true, "Dhaka", 500]
];

console.log(data[1][0]);  //true //60

//Dimentional Array
const marks = [
  [80, 70, 90],
  [60, 75, 85]
];

console.log(marks[1][0]);  //60

//toString()
const fruits = ["Apple", "Mango", "Orange"];

console.log(fruits.toString());

//at()
const colors = ["Red", "Green", "Blue"];

console.log(colors.at(-1));  //Blue

//join()
const numbers = [10, 20, 30];

console.log(numbers.join("+"));  //10+20+30

//Push()
const number = [10, 20];

number.push(30);

console.log(number); //[ 10, 20, 30 ]

//pop()
const queue = ["Bus 1", "Bus 2", "Bus 3"];

queue.pop();

console.log(queue);  // ['Bus 1', 'Bus 2' ]

//shift()
const players = ["Ayan", "Nabil", "Sami"];

players.shift();

console.log(players);  //[ 'Nabil', 'Sami' ]

//unshift()
const tasks = ["Study JavaScript", "Complete homework"];

tasks.unshift("Check email");

console.log(tasks);  //[ 'Check email', 'Study JavaScript', 'Complete homework' ]

//delete
const rooms = ["Room 1", "Room 2", "Room 3"];

delete rooms[0];

console.log(rooms.length); //3

//concat()
const localPlayers = ["Rafi", "Nayeem"];
const foreignPlayers = ["Alex", "Diego"];

const team = localPlayers.concat(foreignPlayers);

console.log(team.toString());  //Rafi,Nayeem,Alex,Diego