// Variables and data types
// let or const
// const create constants
// data types

//number
const num = 1;
console.log("num", typeof num);

//string
const str = "1";
console.log("str constant", typeof str);

//boolean
const bool = true;
console.log("bool constant", typeof bool);

//undefined
let x;
console.log("x", typeof x);

//null
const y = null;
console.log("y constant", typeof y);

//arrays
const arr = [1, 2, 3];
console.log("arr", typeof arr);

//object
const obj = { firstname: "Terence", lastname: "Gaffud" };
console.log("obj", typeof obj);

//control structures
//if-else statement
let isRaining = true;
if (isRaining) {
  console.log("Bring umbrella");
} else {
  console.log("Bring shades");
}

let budget = 500;
if (budget > 300) {
  console.log("Get a grab to the airport");
} else if (budget > 150 && budget <= 300) {
  console.log("Get a taxi");
} else if (budget > 50 && budget <= 150) {
  console.log("Ride a bus");
} else {
  console.log("Bike to airport");
}

//loops - allow codeblocks to be repeated based on conditions
//while loop
let whileCounter = 0;
while (whileCounter < 10) {
  console.log(whileCounter);
  whileCounter++;
}

//do while loop
let doWhileCounter = 10;
do {
  console.log(doWhileCounter);
  doWhileCounter--;
} while (doWhileCounter > 0);

//for loop
for (let forCounter = 0; forCounter < 10; forCounter++) {
  console.log(forCounter);
}

//Challenge
//Use a loop and an if-else statement to print all even numbers less than 30
for (let i = 0; i < 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// === compare type and value

//Arrays are collections of values that are related
let grades = [100, 87, 96, 99, 77];

// In JS, the index of arrays start with 0
//To get the first element, we call the array with index value of 0
console.log(grades[0]);

//What is the value of grades[4]
77;

//what is the property of arrays to get the number of elements
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}

let names = ["apple", "banana", "cherry", "durian"];

//Objects - contain key-value pairs
const pet = {
  species: "cat",
  breed: "persian",
  name: "cheddar"
};

//getting the value of a key
console.log(pet.name);

for (let key in pet) {
  console.log("key is", key, "value", pet[key]);
}

const person = {
  name: "alice",
  age: 30,
  hobbies: ["baking", "running", "cooking"]
};