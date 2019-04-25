const readline = require("readline-sync");
const utility =require("./utility");
let day = readline.question("Enter the day ");
let month = readline.question("Enter the month ");
let year = readline.question("Enter the year ");
utility.dayOfWeek(day,month,year);