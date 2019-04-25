const utility = require("../utility/utility");
const readline = require("readline-sync");
    
    let num = readline.question("Enter Number Of Integer ");
    let arr = [];
        for(let i = 0; i < num; i++ ){
            arr[i] = readline.question();
        }
utility.sum_add_0(arr);