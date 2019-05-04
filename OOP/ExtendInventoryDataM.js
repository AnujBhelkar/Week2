/**
 *  @Purpose        : To create the JSON from ExtendInventoryDataM Object and output the JSON String.     
 *  @file           : ExtendInventoryDataM.js
 *  @overview       : Inventory Manager will use InventoryFactory to create Inventory
                      Object from JSON. The InventoryManager will call each Inventory Object in its list
                      to calculate the Inventory Price and then call the Inventory Object to return the
                      JSON String.
 *  @author         : ANUJ
 *  @since          : 04-05-2019
 */

let read = require("readline-sync");
let fs = require("fs");
let util = require("./ExtendInventoryDataMUtil");
let data = fs.readFileSync("./JSONFiles/ExtendInventoryDataM.json");
let JSONData = JSON.parse(data);
    function inventManage(){
        util.inventManage(JSONData)
    }
inventManage();