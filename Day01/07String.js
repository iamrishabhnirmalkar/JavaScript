const name = "rishabh";
const repoCount = 10;

// console.log(name + repoCount + "value");

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);
// ` ` this is called backtic which is called string interpolation

const name01 = new String("rishabh"); // string decelration
console.log(name01); //[String: 'rishabh'] this is object

console.log(name01[2]);
console.log(name01.__proto__); //{}

console.log(name01.length); // 7
console.log(name01.toUpperCase()); //RISHABH
console.log(name01.charAt(2)); //s
console.log(name01.indexOf("i")); // 1

console.log(name01.substring(0, 4)); //rish
console.log(name01.slice(-6, 4)); //ish

const gameChange = "       hellllo         ";
console.log(gameChange); //       hellllo
console.log(gameChange.trim()); //hellllo

const url = "https://rishabhnirmalakar.com/rish%30nir";
console.log(url.replace("%30", "-")); //https://rishabhnirmalakar.com/rish-nir

console.log(url.includes("rihabh")); //false

const game = "rishabh-rish-nir";
console.log(game.split("-")); //[ 'rishabh', 'rish', 'nir' ]
