//test case for stocks.
//it checks the file is empty or not.
let sto = require('../../../OOP/Stocks');
let assert = require('chai').assert;
let expect = require('chai').expect;
describe("Check JSON file", () =>{
    it("File is Empty or not ",()=>{
        expect(sto).is.equal(true);
    });
});
