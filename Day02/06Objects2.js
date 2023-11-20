//singleton

const tinderUser = new Object();

console.log(tinderUser); // {} empty object

tinderUser.id = "1234";
tinderUser.name = "Rish";
tinderUser.isLogedIn = false;

console.log(tinderUser); //{ id: '1234', name: 'Rish', isLogedIn: false }

const regularUser = {
  email: "rishu@gmail.com",
  fullname: {
    username: {
      firstname: "rishabh",
      lastname: "Nirmlakr",
    },
  },
};

console.log(regularUser.fullname.username.firstname); //rishabh

//How to concat the two object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "x", 4: "d" };
//type1
const obj3 = { obj1, obj2 };
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'x', '4': 'd' } }
//type2
const obj4 = Object.assign({}, obj1, obj2); //{} this is target : obj1 and obj2 is source
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'x', '4': 'd' }
//Type3 most comman type
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLogedIn' ]
console.log(Object.values(tinderUser)); //[ '1234', 'Rish', false ]
console.log(tinderUser.hasOwnProperty("isLogedIn")); //true

//Destrucure

const course = {
  course: "javascript",
  price: "500",
  conurseInstructor: "rishabh",
};

const { conurseInstructor: instructore } = course;

// console.log(conurseInstructor); //rishabh
console.log(instructore); //rishabh

//-----------JSON
///Type 1

// {"firstName":"John", "lastName":"Doe"}

//Type2

// [
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]
