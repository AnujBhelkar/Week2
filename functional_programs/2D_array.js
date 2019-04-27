const utility = require("../utility/utility");
const readline = require("readline-sync");
    let rows = readline.question("Enter Number of rows ");
    let cols = readline.question("Enter Number of columns ");
        let arr = [];
            for( let i = 0; i < rows ; i++){
                arr.push([i]);
                for( let j = 0; j < rows ; j++){
                    arr[i][j] = readline.question();
                }                 
            }
        utility.array_2D(arr);
    