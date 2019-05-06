/**
 *  @Purpose        : Use Regex to replace name, full name, Mobile#, and Date with proper value.   
 *  @file           : RegularExpDemon.js
 *  @overview       : Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system.
 *                    your contact number is 91­xxxxxxxxxx.Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
 *                    Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *  @author         : ANUJ
 *  @since          : 02-05-2019
*/
 
function regularExpDemon(){   
    try {    
        let read = require("readline-sync");
        let utility = require("./OOPUtility");
        let arr = [];
            /**
             * Read the name and validate it
             */
        var name = read.question("Enter Your Name :- ");
        while(isNaN(name)==false){
            console.log('Please, Re-Enter your Name ');
                var name = read.question('Enter Your Name ');   
        }
            /**
             * Read the Full name and validate it
             */
        var fullName = read.question("Enter Your Full Name :- ");
        while(isNaN(fullName)==false){
            console.log('Please, Re-Enter your Full Name ');
                var fullName = read.question('Enter Your Full Name ');   
        }
        /**
         * Read the mobile Number name and validate it
         */
        var mobileNumber = read.question("Enter Your Mobile Number :- ");
        while(isNaN(mobileNumber)==true ){
            console.log('Please, Re-Enter your Mobile Number ');
                var mobileNumber = read.question('Enter Your Mobile Number ');   
        }
        let date = new Date();
        let ans = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        arr[0] = name;
        arr[1] = fullName;
        arr[2] = mobileNumber;
         utility.regularExp(name,fullName,mobileNumber,ans);
        return arr;
    }
    catch(err){
        console.log(err);
    }
}
let reg = regularExpDemon();
module.exports =  reg;