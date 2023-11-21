// for of

const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//   console.log(i);
// }

// const greetings = "hello rishu";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

// Maps maps is knows for unique values  and don not double use
//object
// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United states of america");
// map.set("Fr", "France");
// map.set("IN", "India");

// // console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }
// console.log(typeof map); //object

//OBJECT for of loop not work in this type of object
// const myObj = {
//   game1: "NFS",
//   game2: "spiderman",
// };

// for (const [key, value] of myObj) {
//   //   console.log(key, ":-", value); //myObj is not iterable
// }

//OBJECTS

const myOBJECTS = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myOBJECTS) {
  console.log(`${key} shortcut is for ${myOBJECTS[key]}`);
}

//array

const program = ["js", "ruby", "c++"];
for (const key in program) {
  //   console.log(key); // this print keys
  console.log(program[key]); // print proper arry
}
