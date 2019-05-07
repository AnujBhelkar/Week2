//@purpose  test case for Extend Invent Data Management.
//it checks the file is empty or not.
let Ex = require('../../../OOP/ExtendInventoryDataM');
let Exu = require('../../../OOP/ExtendInventoryDataMUtil');
let assert = require('chai').assert;
let expect = require('chai').expect;
let fs = require('fs');
let data =fs.readFileSync("/home/admin1/fellowShipPrograms/OOP/JSONFiles/ExtendInventoryDataM.json");
let obj = JSON.parse(data);
    describe("Check JSON file", () => {
        it("File is Empty or not ",()=> {
            expect(Ex).is.equal(true);
        });
    });

    //check the JSON data is converted into object
    describe("Check Data",() =>{
        it("JASON data is converted into object or not ",() => {
            assert.isObject(obj);
        // console.log(obj);
        });
    });
    
    describe("Check Data For Stock",() =>{
        it("Name is string or not",() => {
            for(let i = 0; i < obj.stock.length; i++){
                assert.isString(obj.stock[i].stockName);
            }
        // console.log(obj);
        });
        it("weight and price should be in number",() => {
            for(let i = 0; i < obj.stock.length; i++){
                //console.log(obj.stock[i].noOfShares +' '+ obj.stock[i].price)
                assert.isNotNaN(obj.stock[i].noOfShares);
                assert.isNotNaN(obj.stock[i].price);
            }
        // console.log(obj);
        });
    });