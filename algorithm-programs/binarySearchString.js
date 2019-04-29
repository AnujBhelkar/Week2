let util=require('./utility');
let readline=require('readline-sync');
let fs = require("fs");
let output = util.binarySearchString();
    if(output == -1)
        console.log("Element Not Found ");
    else
        console.log("Element Found ");