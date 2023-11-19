// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

const score = 10; // this means you cannot defined that is number or what it is.. so that is example of dynamically typed language

// Primitive Data Type

// 7 Types : String, Number, Boolearn, null, Undefined, Symbol, BigInt

const score01 = 100;
const score02 = 100.2;
const isLoggedIn = false;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false
let tempo = null; // object by type of

const bigNumber = 131346546876876876351463546547687;
console.log(bigNumber); //1.3134654687687688e+32

//Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array declaration type of object
let myObj = {
  hero: "Xman",
  age: 22,
}; // Object declaration type of object
const myFunction = function () {
  console.log("helloWorld");
};
myFunction(); // Function declaration type of object or object function

// console.table([typeof heros, typeof myObj]);
