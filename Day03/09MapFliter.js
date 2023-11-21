const coding = ["js", "c++", "python", "java"];

// const values = coding.forEach((item) => {
//   console.log(item);
// });

// console.log(values); //undefined not return the value

//+++++++++++++++Fliter

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnum = myNum.filter((num) => num > 4); // in filter we use the condition
// const newnum02 = myNum.filter((num) => {
//   num > 4;
// });
// const newnum03 = myNum.filter((num) => {
//   return num > 4;
// });
// console.log(newnum); //[ 5, 6, 7, 8, 9, 10 ]
// console.log(newnum02); // [] due to implicit return
// console.log(newnum03); // [ 5, 6, 7, 8, 9, 10 ] due to explicit return

//+++++++++Logic way to print array

// const myNum01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = [];
// myNum01.forEach((num) => {
//   if (num > 4) {
//     newNum.push(num);
//   }
// });
// console.log(newNum); //[ 5, 6, 7, 8, 9, 10 ]

//++++++++++++++++++++++++++++++++++++++++++++++++Fliter
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//type1

// const userBooks = books.filter((bk) => bk.genre == "History");
// console.log(userBooks);

//type2

// const userBooks = books.filter((bk) => {
//   return bk.publish >= 2000;
// });
// console.log(userBooks);

//type3

// const userBooks = books.filter((bk) => {
//   return bk.publish >= 1997 && bk.genre === "History";
// });
// console.log(userBooks);

//++++++++++++++++++++++++++++++++++++++++++    MAP

// const myNumer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNY = myNumer.map((num) => num + 10);

// console.log(newNY);

// ++++++++++++++++++Chaining

// const myNumer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumer.map((num) => num * 10).map((num) => num + 1); // on secound num the value is store from first num from first map
// console.log(newNum);

//++++++++++++++++++++++++++++Reducer

const myNum = [1, 2, 3];
//name function

// const myTotal = myNum.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

// console.log(myTotal);

//arrow function

// const myTotal = myNum.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shoopingCart = [
  {
    itemName: "js course",
    price: 500,
  },
  {
    itemName: "python course",
    price: 1000,
  },
  {
    itemName: "mobile dev course",
    price: 12000,
  },
];

const pricetopay = shoopingCart.reduce((acc, item) => acc + item.price, 0);
console.log(pricetopay);
