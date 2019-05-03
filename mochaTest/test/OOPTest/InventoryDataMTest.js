
/**
 * @purpose : Inventory Data Management test 
 * @author  : ANUJ
 * @since   : 03-05-2019
 */
let except = require('chai').expect;
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

describe(' Number or String ', function(){
        it('Input is number Not a string', function(){
            let data1 = inventoryData;
            except(data1).to.be.true;
        });
    });
    describe(' Check Choice ', function(){
        it('Select Choice is wrong', function(){
            let data = inventoryData;
            except(data).to.equal(true);
        });
    });