let myDate = new Date();
// console.log(myDate); //2023-11-20T00:36:23.178Z
// console.log(myDate.toString()); //Mon Nov 20 2023 06:06:53 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2023-11-20T00:37:15.098Z
// console.log(myDate.toLocaleString()); //20/11/2023, 6:07:39 am
// console.log(myDate.toDateString()); //Mon Nov 20 2023
// console.log(myDate.toLocaleString()); // 20/11/2023, 6:13:34 am

// console.log(typeof myDate); // object

let myCraetedDate = new Date(2023, 0, 23);
let myCraetedDate02 = new Date(2023, 0, 23, 5, 4);

// console.log(myCraetedDate.toDateString()); //Mon Jan 23 2023
// console.log(myCraetedDate02.toLocaleString()); //23/1/2023, 5:04:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
