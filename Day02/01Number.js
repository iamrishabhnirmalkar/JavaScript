const score = 100;

const balance = new Number(100); // Number decelration
console.log(balance); //[Number: 100]

console.log(balance.toString()); // convert into string 100
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.4544;

console.log(otherNumber.toPrecision(4)); // 123.5

const hundreds = 100000000000;
console.log(hundreds.toLocaleString("en-IN")); //1,00,00,00,00,000
