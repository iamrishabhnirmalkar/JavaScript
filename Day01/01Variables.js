const accountId = 1215;
let accountEmail = "rishabhnir@gmail.com";
var accountPassword = "12134";
accountCity = "Raipur"; // This is also possible that you not assign varible name
let accountState; // not assigne vale means this is undefined

// accountId = 02; // Not allowed

accountEmail = "rishu@d.com";
accountPassword = "00000";
accountCity = "bhilai";

console.log(accountId);

/*
Prefer not to use var beacause of issue in block scope and functional scope
 */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

{
  //this is scope {}
}
