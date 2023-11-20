// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-4)); // negitive to postive

// console.log(Math.round(4.5)); // 5 round of value
// console.log(Math.ceil(4.6)); // 5 upper value
// console.log(Math.floor(4.6)); // 4 lowest value
// console.log(Math.min(4, 40, 66, 450, 43)); // 4 Minimum value

console.log(Math.random()); // random value
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1); // random value from 1 to 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
