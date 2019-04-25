const readline = require("readline-sync");
const utility =require("./utility");
let size = readline.question("Entre the size of array ");
let elements = [];
    for(let i = 0; i < size; i++){
        elements[i] = readline.question();
    }
utility.insertionSort(elements);