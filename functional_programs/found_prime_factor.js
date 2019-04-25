const readline = require("readline-sync");
const utility = require("../utility/utility");
let inp = readline.question("Enter the Number that of prime factor you want ");
utility.found_prime_factor(inp);