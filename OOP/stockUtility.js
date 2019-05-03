//create stock class and inside function passing the JSON file data
class Stock{
    stock(data){
        //data.stocks calling the array of JSON file stock
        var stock = data.stocks;
         for(var key in stock){
             console.log("The Total value of " + stock[key].stock_name +" is ", stock[key].Number_of_shares * stock[key].share_price );
        //     console.log("\n")
        }
        var nee = 0;
            for(var key in stock){  
                nee = parseInt(nee) + parseInt(stock[key].Number_of_shares * stock[key].share_price)
            }
            console.log("Total cost of all stocks are", nee);

    }
}
module.exports = new Stock();    