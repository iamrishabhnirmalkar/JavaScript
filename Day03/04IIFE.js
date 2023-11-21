// Immediately Invoked Function Expression IIFE

(function chai() {
  console.log(`DB CONNECTED`);
})();
// a function that is called immediately after it is defined due to poluction of globar scope

//for arrow function
(() => {
  console.log(`DB connected 02`);
})();

((name) => {
  console.log(`DB connected 03 ${name}`);
})("rishu");
