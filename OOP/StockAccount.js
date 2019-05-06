let fs = require('fs');
let utility = require('./StockAccountUtil');
let data = fs.readFileSync("/home/admin1/fellowShipPrograms/OOP/JSONFiles/StockAccount.json");
let JSONData = JSON.parse(data);
function stock(){
    utility.stockAccount(JSONData);
}
stock();
