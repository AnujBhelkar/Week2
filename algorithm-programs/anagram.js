const utility = require("./utility");
const readline = require("readline-sync");
let str1 = readline.question(" Enter the first string ");
let str2 =readline.question(" Enter the second string ");
utility.anagram(str1,str2);