// var b = 300; // This is not run
// //This is global scope becasue not write in {}
// let ab = 100;
// if (true) {
//   let a = 10;
//   let ab = 101;
//   var b = 20;
//   const c = 30;
//   //this is block scope due to {}
//   console.log("INSIDE", ab); //101
// }

// console.log(a); //a is not defined
// console.log(b); // 20 scope run first
// console.log(c); //c is not defined

// console.log(ab); // 100

//// Nestest scope

// function one() {
//   const username = "rishabh";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log(website);
//   two();
// }
// one();

if (true) {
  const username = "rishabh";
  if (username === "rishabh") {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// //+++++++++++++++++++++Interestiong +++++++++++++++++++++++

addone(5); // not show error
function addone(num1) {
  return num1 + 1;
}

const addTwo = function (num1) {
  //this is function expression
  return num1 + 2;
};
addTwo(5);

// addThree(5); // this show error because hosting concep
// const addThree = function (num1) {
//   //this is function expression
//   return num1 + 3;
// };
