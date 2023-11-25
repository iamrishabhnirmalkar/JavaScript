// //+++++++++++++Promise01

// const promise01 = new Promise(function (resolve, reject) {
//   //DO an asyn task
//   //DB call , cryptography, network
//   setTimeout(function () {
//     console.log(`Async task is compelete`);
//     resolve();
//   }, 1000);
// });

// promise01.then(function () {
//   console.log("Promise consumed");
// });

// //+++++Promise 02

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Asyn 2 resolve");
// });
//resolve connect to then

// //+++++Promise 03

// const promise03 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@gmail.com" });
//   }, 1000);
// });
// promise03.then(function (user) {
//   console.log(user);
// });

// //+++++Promise 04

// const promise04 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "rishabh", password: "123" });
//     } else reject(`Error:something went wrong`);
//   }, 1000);
// });

// promise04
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("the promise is resolve or rejected");
//   });

// //+++++Promise 05

// const promise05 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "rishabh", password: "123" });
//     } else reject(`Error:something went wrong`);
//   }, 1000);
// });

// async function consumePromise05() {
//   try {
//     const response = await promise05;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise05();

////++++++++++++

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
