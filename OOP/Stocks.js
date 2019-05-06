/**
 *  @Purpose        : To Create stock class to maintain the stock object in json file.   
 *  @file           : Stocks.js
 *  @author         : ANUJ
 *  @since          : 03-05-2019
 */
let fs = require('fs');
let utility = require('./stockUtility');
let read = require('readline-sync');
let data = fs.readFileSync('/home/admin1/fellowShipPrograms/OOP/JSONFiles/stocks.json');
let stocks = JSON.parse(data);
function stock(){
    if(stocks != null){
        utility.stock(stocks);
        return true;
    }
    else{
        return false;
    }
}
module.exports = stock();