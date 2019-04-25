const readline = require("readline-sync");
const utility =require("./utility");
let amount = readline.question("Enter the amount ");
let notes = [1000,500,100,50,10,5,2,1];
utility.vendMachine(amount,notes);