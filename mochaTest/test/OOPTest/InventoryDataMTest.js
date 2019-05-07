
/**
 * @purpose : Inventory Data Management test 
 * @author  : ANUJ
 * @since   : 03-05-2019
 */
let assert = require('chai').assert;
let expect = require('chai').expect
let fs = require('fs');
let data =fs.readFileSync("/home/admin1/fellowShipPrograms/OOP/JSONFiles/InventoryDataM.json");
let obj = JSON.parse(data);
            // let fs = require('fs');
            // //read JSON File ans store data into data variable
            // let data = fs.readFileSync('../../../OOP/JSONFiles/InventoryDataM.json');
            // //data always comes in string so parse the data with JSON.parse(), and data become javascript object.
            // let JSONData =JSON.parse(data);
            // //console.log(JSONData);

let inventoryData = require('../../../OOP/InventoryDataM');

describe(' Check Choice ', function(){
        it('Only Number ', function(done){
            let data1 = parseInt(inventoryData);
            //console.log(data1);
            assert.isNotNaN(data1);
            done();
        });
        it('Select Choice is wrong', function(done){
            let data = inventoryData;
            assert.isBelow(data,4);
            done();            
        });
    });

    //check the JSON data is converted into object
    describe("Check Data",() =>{
        it("JASON data is converted into object or not ",() => {
            assert.isObject(obj);
        // console.log(obj);
        });
    });
    
    describe("Check Data For Rice",() =>{
        it("Name is string or not",() => {
            for(let i = 0; i < obj.Rice.length; i++){
                assert.isString(obj.Rice[i].name);
            }
        // console.log(obj);
        });
        it("weight and price should be in number",() => {
            for(let i = 0; i < obj.Rice.length; i++){
                assert.isNumber(obj.Rice[i].weight);
                assert.isNumber(obj.Rice[i].prize);
            }
        // console.log(obj);
        });
    });
    describe("Check Data For Pulses",() =>{
        it("Name is string or not",() => {
            for(let i = 0; i < obj.Pulses.length; i++){
                assert.isString(obj.Pulses[i].name);
            }
        // console.log(obj);
        });
        it("weight and price should be in number",() => {
            for(let i = 0; i < obj.Pulses.length; i++){
                assert.isNumber(obj.Pulses[i].weight);
                assert.isNumber(obj.Pulses[i].prize);
            }
        // console.log(obj);
        });
    });
    describe("Check Data For Wheat",() =>{
        it("Name is string or not",() => {
            for(let i = 0; i < obj.Wheat.length; i++){
                assert.isString(obj.Wheat[i].name);
            }
        // console.log(obj);
        });
        it("weight and price should be in number",() => {
            for(let i = 0; i < obj.Wheat.length; i++){
                assert.isNumber(obj.Wheat[i].weight);
                assert.isNumber(obj.Wheat[i].prize);
            }
        // console.log(obj);
        });
    });