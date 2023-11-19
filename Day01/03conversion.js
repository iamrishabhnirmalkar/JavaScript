/*
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
 */

let score = "33";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let score02 = "12abc";
let valueInNum = Number(score02);
console.log(typeof valueInNum);
console.log(valueInNum); //NaN

//"33" => 33
// "12abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn); // true

// 1 or any number => true; 0 => false
// "" => false ; "ahdsg" => true

let someNumber = 33;
let some = String(someNumber);
console.log(some);
console.log(typeof some); // string
