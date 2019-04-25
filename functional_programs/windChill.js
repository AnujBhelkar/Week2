const utility = require("../utility/utility");
const readline = require("readline-sync");
let t = readline.question(" Enter the temperature ");
let v =readline.question("Enter wind speed ");
utility.windChill(t,v);