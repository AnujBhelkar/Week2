/**
 * It is Util file of ExtendInventoryDataM
 */
let read = require("readline-sync");
let fs = require("fs");
class ExInventory{    
    
    inventManage(JSONData){   
        let choice = read.question(" 1. Add \n 2. Remove \n 3. Display \n 4. Print \n 5. exit \n");
            switch(parseInt(choice)){
                case 1  : this.add(JSONData);
                case 2  : this.remove(JSONData);
                case 3  : this.display(JSONData);
                case 4  : this.print(JSONData);
                case 5  : this.exit();  
                default :
                    console.log("Invalid Input "); 
                    break;     
            }
        }
            // Add data in ExtendInventoryDataM.json using push array and write file.
            // JSON.stringfy() method convert javascript object or value to a JSON string.  
        add(JSONData){
                let stockName = read.question("Enter the Stock Name ");
                let noOfShares = read.question("Enter Number Of shares ");
                let price = read.question("Enter Price of share ");
                //push data into JSON.stock
                JSONData.stock.push({
                    stockName : stockName,
                    noOfShares: noOfShares,
                    price     : price
                });
                fs.writeFileSync("/home/admin1/fellowShipPrograms/OOP/JSONFiles/ExtendInventoryDataM.json",JSON.stringify(JSONData));
                this.inventManage();
            }
        // Remove data by stockname
        remove(JSONData){
            let data = JSONData.stock;
            let count = 0;
            let stockName = read.question("Enter Stock Name that You want to remove ");
            for( let i = 0; i < data.length; i++){
                if( stockName == data[i].stockName){
                    count = 1;
                    let index =  data.indexOf(data[i]);
                    // splice method use for remove the elements.
                    // it take index of element and how many element want to delete.
                    data.splice(index,1);
                    console.log("Stock Deleted Successfully !!");
                }
            }
            fs.writeFileSync("./JSONFiles/ExtendInventoryDataM.json",JSON.stringify(JSONData))
            if(count = 0){
                console.log("Stock Not Found ");
                this.remove(JSONData);
            }               
        }
        display(JSONData){
            console.log(JSONData);
            this.inventManage(JSONData);
        }
        print(JSONData){
            let data = JSONData.stock;
            console.log("Total Price Of each share is \n");
            for(let key in data){
                console.log(data[key].stockName + "-->" + data[key].noOfShares * data[key].price);
            }
            this.inventManage(JSONData);
        }
        exit(){
            console.log("Thank You!!!");
            return;
        }     
}
module.exports = new ExInventory();