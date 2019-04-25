const utility = require("../utility/utility")
const readline = require('readline-sync');
  let name = readline.question("What is your name ");
  let count = name.length;
  utility.replace_str(name,count);

