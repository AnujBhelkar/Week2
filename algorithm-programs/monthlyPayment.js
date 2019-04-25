
const read = require("readline-sync");
const utility = require("./utility");
let year = read.question(" For how many Years");
let principalA = read.question(" Enter Principal Amount ");
let rate = read.question(" Enter Rate of interest");
utility.monthlyPay(year, principalA, rate);