const readline = require("readline-sync");
const utility = require("../utility/utility");
let stake = readline.question("Enter the stake ");
let goal = readline.question("Enter the Goal ");
let time = readline.question("Enter Number of times ");
utility.gambler(stake, goal, time);