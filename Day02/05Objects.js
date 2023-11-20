//object literals
const mySym = Symbol("key1");

const jsUser = {
  name: "rishabh",
  "full name": "Nirmalkar",
  [mySym]: "mykey1", //symbol
  age: 18,
  location: "raipur",
  email: "rishbah@gmail.com",
  lastLoginDays: ["Monday", "Tuesday"],
};

console.log(jsUser.email); //rishbah@gmail.com (acces the object)
console.log(jsUser["email"]); //rishbah@gmail.com (acces the object)
console.log(jsUser[mySym]);

jsUser.email = "rishu@ghg"; // change by using =
Object.freeze(jsUser); // frize the object do noyt change anything
jsUser.email = "hghagh"; // try to change
console.log(jsUser);

jsUser.greeting = function () {
  console.log("hello js user"); //hello js user
};
jsUser.greeting02 = function () {
  console.log(`hello js user, ${this.name}`); //hello js user, rishabh
};

console.log(jsUser.greeting()); //undefined
console.log(jsUser.greeting02()); //undefined
