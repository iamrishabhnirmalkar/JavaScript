function sayMyname() {
  console.log("H");
  console.log("e");
  console.log("l");
  console.log("o");
}

// sayMyname();

//Type 2 function

function addTwoNumber(num1, num2) {
  //(when we assign function inside braket is called paramenter)
  console.log(num1 + num2);
}

addTwoNumber(3, 4); //7 (when we call function inside braket is called argument)
addTwoNumber(3, "4"); //34
const result = addTwoNumber(5, 6); //11
console.log("Result", result); //Result undefined this is undfined becasue we only  consolelog the value not assign

//Type 2 function

function addTwoNumber02(num1, num2) {
  let result = num1 + num2;
  console.log(result);
  return result;
}

addTwoNumber02(4, 5);

function loginUserMessage(username) {
  return `${username} just logged in`;
}

console.log(loginUserMessage("rishabh")); //rishabh just logged in
console.log(loginUserMessage()); //undefined

function calculateCartPrice(...num1) {
  return num1;
}

calculateCartPrice(2);
console.log(calculateCartPrice(2, 35, 4)); //[ 2, 35, 4 ] by using of rest oprator ... we get the arry of all the agrument we pass

function calculateCartPrice02(val1, val2, ...num1) {
  return num1;
}

calculateCartPrice02(2);
console.log(calculateCartPrice02(2, 35, 4, 56)); //[  4 ,56] val1 get the 2 and val2 get 35

// object
const user = {
  username: "rishu",
  price: 1999,
};
function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}` //username is rishu and price is 1999
  );
}

handleObject(user);
handleObject({
  username: "sam",
  price: 20,
});

//arrays

const myNewArray = [100, 200, 300, 400, 500];

function returnSecound(getarray) {
  return getarray[0];
}

console.log(returnSecound(myNewArray)); //100
console.log(returnSecound([700, 8000, 9000, 70000])); //700
