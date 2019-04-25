const readline = require("readline-sync");
const utility =require("./utility");
let choice = readline.question("Enter 1 for celcius to fahrenheit or Enter 2 for vice versa ");
if(choice == 1){
    utility.celsiusToF();
}
else if(choice == 2){   
    utility.fahrenheitToC();
}
else{
    console.log("Wrong Choice");
}
