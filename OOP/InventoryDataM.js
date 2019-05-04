/**
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
 *  @file           : inventoryDataM.js
 *  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                      with properties name, weight, price per kg.Then read Json file and calculate 
                      value of each inventory. 
 *  @author         : ANUJ
 *  @since          : 02-05-2019
 */

    
function inventory()
{        
    let read = require("readline-sync");
    let fs = require('fs');
    //read JSON File ans store data into data variable
    let data = fs.readFileSync('/home/admin1/fellowShipPrograms/OOP/JSONFiles/InventoryDataM.json');
    //data always comes in string so parse the data with JSON.parse(), and data become javascript object.
    let JSONData =JSON.parse(data);
    //console.log(JSONData);

    
        try{
                console.log("1. Rice ");
                console.log("2. Pulses ");
                console.log("3. Wheat ");
                let choice = read.question("Please Enter your Choice ");
                    /**
                     * parse option for integer only
                     */
                    switch(parseInt(choice)){
                        case 1 :
                            let weight = read.question("Please Enter the weight of Rice that you want to purchase ");
                                if(!isNaN(weight)){
                                    for( i = 0; i < JSONData.Rice.length; i++){
                                        /**
                                         * calculate total and print
                                         */
                                        console.log("Per kg of " + JSONData.Rice[i].name + " cost " + JSONData.Rice[i].prize +
                                                    " And for " + weight + " Kgs  cost " + weight * JSONData.Rice[i].prize);
                                    }
                                    return 1;
                                }
                                else{
                                    return false;
                                }
                                break;
                        case 2 :
                            let weight1 = read.question("Please Enter the weight of Pulses that you want to purchase ");
                            if(!isNaN(weight1)){
                                for( i = 0; i < JSONData.Rice.length; i++){
                                    /**
                                     * calculate total and print
                                     */
                                    console.log("Per kg of " + JSONData.Pulses[i].name + " cost " + JSONData.Pulses[i].prize +
                                                " And for " + weight1 + " Kgs  cost " + weight1 * JSONData.Pulses[i].prize);
                                }
                                return 1;
                            }
                            else{
                                return false;
                            }
                            break;
                        case 3 :
                            weight3 = read.question("Please Enter the weight of Wheat that you want to purchase ");
                            if(!isNaN(weight3)){
                                for( i = 0; i < JSONData.Rice.length; i++){
                                    /**
                                     * calculate total and print
                                     */
                                    console.log("Per kg of " + JSONData.Wheat[i].name + " cost " + JSONData.Wheat[i].prize +
                                                " And for " + weight3 + " Kgs  cost " + weight3 * JSONData.Wheat[i].prize);
                                }
                                return 1;
                            }
                            else{s
                                return false;
                            }
                            break;
                            /**
                             * Validating Number Items
                             */
                            default :
                                return choice;
                    }
                }
                catch(err){
                    console.log(err);
                }
        }
    var inventory = inventory();
    module.exports = inventory;