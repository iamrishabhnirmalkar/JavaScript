const myArry = [0, 1, 2, 3, 4, 5]; //Array decelration
const myHero = ["shaktiman", "naagraj"]; //Array decelration

const myArry02 = new Array(1, 2, 3, 4); //Array decelration
console.log(myArry02);

// Array Methods

myArry.push(6);
myArry.push(7); // add 7 in arry
myArry.pop(); // remove last value
myArry.unshift(9); // add in first place 9
myArry.shift(); // remove first place value

console.log(myArry.includes(9)); // false

const newArr = myArry.join();
console.log(typeof newArr); //  copnvert into string
console.log(myArry);

// Slice & splice

console.log("A", myArry); //A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArry.slice(1, 3);

console.log(myn1); //[ 1, 2 ]
console.log("B", myArry); //B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArry.splice(1, 3);
console.log(myn2); //[ 1, 2, 3 ]
console.log("c", myArry); //[ 0, 4, 5 ]

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); //flash

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const allHeors = [...marvel_heros, ...dc_heros];
console.log(allHeors);

const another_arry = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]];
const real_another_arry = another_arry.flat(Infinity);
console.log(real_another_arry); //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

console.log(Array.isArray("Rishu")); //false
console.log(Array.from("Rishu")); //[ 'R', 'i', 's', 'h', 'u' ] convert into array
console.log(Array.from({ name: "rishabh" })); // this is empty arry [interesting]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 0 ]
