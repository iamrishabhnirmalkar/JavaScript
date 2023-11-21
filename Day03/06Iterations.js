//For loop

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }
// console.log(element); // not asses becasuse scope block

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loopvalue ${j} and outer inner loop ${i} `);
//   }
// }

//Table

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(i + "*" + j + " =" + i * j);
//   }
// }

//
// let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

//Break And Continue

// for (let index = 1; index < 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`value of i is ${index}`);
// }

// for (let index = 1; index < 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`value of i is ${index}`);
// }

//while loop

// let index = 0;
// while (index <= 10) {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// }

// let myArray = ["flash", "batman", "superman"];
// let arr = 0;
// while (arr < myArray.length) {
//   console.log(`value is ${myArray[arr]}`);
//   arr = arr + 1;
// }

// do while loop // in this loop score print first if they are more thand condition

let score = 1;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 10);
