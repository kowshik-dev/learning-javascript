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

//flat()
const routes = [
  ["Dhaka", "Chattogram"],
  ["Sylhet", "Rajshahi"]
];

console.log(routes.flat());  //[ 'Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi' ]

//splice()
const devices = ["Laptop", "Tablet", "Camera", "Printer"];
devices.splice(1, 2);

console.log(devices);

//toSplice
const cities = ["Dhaka", "Khulna", "Sylhet", "Rajshahi"];
const updatedCities = cities.toSpliced(1, 2);

console.log(updatedCities);  //[ 'Dhaka', 'Rajshahi' ]
console.log(cities);  //[ 'Dhaka', 'Khulna', 'Sylhet', 'Rajshahi' ]

//slice()
const tickets = ["A1","A2","A3","A4","A5"];
const selectedTickets = tickets.slice(2,4);

console.log(selectedTickets);  //[ 'A3', 'A4' ]
console.log(tickets);  //[ 'A1', 'A2', 'A3', 'A4', 'A5' ]

//practice0
const deliveries = ["order-101","order-102","order-103","order-104"];
    deliveries.shift();
    deliveries.unshift("urgent-500");
    
    console.log(deliveries);  //[ 'urgent-500', 'order-102', 'order-103', 'order-104' ]

//practice1
const exhibits = [
  "Ancient Coin",
  "Plastic Toy",
  "Royal Sword"
];
    exhibits.splice(1,1,"Clay Pot");
    console.log(exhibits);

//practice2
const checklist = [
  "Check Oxygen",
  "Bring Umbrella",
  "Start Engine"
];
const updateList = checklist.toSpliced(1,1,"Check Fuel");
    console.log(checklist);
    console.log(updateList);

//practice3
const signals = [
  "Signal-A",
  "Signal-B",
  "Signal-C",
  "Signal-D",
  "Signal-E"
];
const selectedSignals = signals.slice(1,4);
console.log(selectedSignals);