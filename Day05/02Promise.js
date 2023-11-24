//+++++++++++++Promise01

const promise01 = new Promise(function (resolve, reject) {
  //DO an asyn task
  //DB call , cryptography, network
  setTimeout(function () {
    console.log(`Async task is compelete`);
    resolve();
  }, 1000);
});

promise01.then(function () {
  console.log("Promise consumed");
});

//+++++++++
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Asyn 2 resolve");
});
