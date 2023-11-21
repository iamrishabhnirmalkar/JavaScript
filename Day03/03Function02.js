const user = {
  username: "rioshabh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`); // we use this keyword because of current context or in otherword we are in same block
    // console.log(this);
  },
};
// user.welcomeMessage(); //rioshabh, Welcome to website
// user.username = "sam";
// user.welcomeMessage(); //sam, Welcome to website
// console.log(this); // {}

//// Arrow function

// function chai() {
//   let username = "Rishabh";
//   console.log(this.username);
// }

// chai(); //undefined cant use this in the function

// type 2 function

// const chai = function () {
//   let username = "Rishabh";
//   console.log(this.username);
// };
// chai();

// type 3 function arrow function

// const chai = () => {
//   let username = "Rishabh";
//   console.log(this.username); // undefined
// };
// chai();

const addtwo = (num1, num2) => {
  // This is also type to write arrow funtion which is callled explicit return (explicit return means useing return keyword)
  return num1 + num2;
};
console.log(addtwo(3, 4));

// This is also type to write arrow funtion which is callled implicit return (implicit return means not useing return keyword)

const addtwo01 = (num1, num2) => num1 + num2;
// const addtwo01 = (num1, num2) => (num1 + num2);
console.log(addtwo01(3, 4));
