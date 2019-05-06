// create class of StockAccountUtill

let read = require("readline-sync");

class StockAccount{
    stockAccount(JSONData) {
        console.log(" Stock Account ")
        let choice = read.question(" 1. Add \n 2. Remove \n 3. Display \n 4. Save \n 5. exit ");
            switch(parseInt(choice)){
                case 1 : add(JSONData);
                case 2 : remove(JSONData);
                case 3 : display(JSONData);
                case 4 : save(JSONData);
                case 5 : exit(JSONData);                
            }
    }    
    account(filename){

    }
}
module.exports = new StockAccount();
