//FOR EACH it a pramiter of loop only
const coding = ["js", "c++", "python", "java"];

//name function

// coding.forEach(function (item) {
//   console.log(item);
// });

//callback functionb means a function without name forEach (callback function)

//arrow function

// coding.forEach((item) => {
//   console.log(item);
// });

//Function decleration

// function printMe(iten) {
//   console.log(iten);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languagename: "javascript",
    langyageFileName: "js",
  },
  {
    languagename: "python",
    langyageFileName: "py",
  },
  {
    languagename: "java",
    langyageFileName: "j",
  },
  {
    languagename: "c++",
    langyageFileName: "cpp",
  },
];

myCoding.forEach((item) => {
  console.log(item.langyageFileName);
});
