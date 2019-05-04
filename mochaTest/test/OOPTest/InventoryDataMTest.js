
/**
 * @purpose : Inventory Data Management test 
 * @author  : ANUJ
 * @since   : 03-05-2019
 */
let assert = require('chai').assert;
let expect = require('chai').expect
let fs = require('fs');
let data =fs.readFileSync("/home/admin1/fellowShipPrograms/OOP/JSONFiles/InventoryDataM.json");
JSON.parse(data);
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