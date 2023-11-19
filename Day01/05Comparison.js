console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // true
console.log("2ad" > 1); // false

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// ===  is check by your datatype
console.log("2" === 2); // false because it check you data type also
console.log("2" == 2); // true because it convert your string to number or convert in same datatype
