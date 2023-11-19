// 2 Type Memory Stack (Primitive)  & Heap (Non-Primitive)

//==========================PRIMITIVE===========
//orginal value is not change
let youtubeName = "Rishabhnirmalkar";
let anotherNaame = youtubeName;

console.log(anotherNaame); //Rishabhnirmalkar
anotherNaame = "helloworld";

console.log(anotherNaame); //helloworld
console.log(youtubeName); //Rishabhnirmalkar MAIN NAME NOT CHANGE

//==========================NON PRIMITIVE===========
//orginal value also change
let user01 = {
  email: "user@google.com",
  upi: "user@ybl",
};

let user02 = user01;

user02.email = "rishabh@google.com";

console.log(user01.email); //rishabh@google.com
console.log(user02.email); //rishabh@google.com
