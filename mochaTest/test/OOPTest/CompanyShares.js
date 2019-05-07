//@purpose  test case for Company shares.
//it checks the file is empty or not.
let assert = require('chai').assert;
let expect = require('chai').expect;
let fs = require('fs');
let data =fs.readFileSync("/home/admin1/fellowShipPrograms/OOP/JSONFiles/CompanyShares.json");
let obj = JSON.parse(data);
    describe("Check JSON file", () => {
        it("JSON file is object or not ",()=> {
            assert.isObject(obj);
        });
    });

    describe("Check Data For Stock",() =>{
        it("Name is string or not",() => {
            for(let i = 0; i < obj.stockAccount.length; i++){
                //console.log(obj.stockAccount[i].shareName +" "+ obj.stockAccount[i].stockSymbol)
                assert.isString(obj.stockAccount[i].shareName);
                assert.isString(obj.stockAccount[i].stockSymbol);
            }
        // console.log(obj);
        });
        it("weight and price should be in number",() => {
            for(let i = 0; i < obj.stockAccount.length; i++){
               // console.log(obj.stockAccount[i].NumberOfShares +" "+ obj.stockAccount[i].sharePerPrice)
                assert.isNotNaN(parseInt(obj.stockAccount[i].NumberOfShares));
                assert.isNotNaN(parseInt(obj.stockAccount[i].sharePerPrice));
            }
        // console.log(obj);
        });
    });