const readline = require("readline-sync");
const utility = require("../utility/utility");
let year = readline.question("Enter a Year in yyyy format ");
let count = year.length;
utility.leap_year(year,count);
