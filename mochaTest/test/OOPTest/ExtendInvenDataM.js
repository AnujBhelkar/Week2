//@purpose  test case for Extend Invent Data Management.
//it checks the file is empty or not.
let Ex = require('../../../OOP/ExtendInventoryDataM');
let Exu = require('../../../OOP/ExtendInventoryDataMUtil');
let assert = require('chai').assert;
let expect = require('chai').expect;
    describe("Check JSON file", () => {
        it("File is Empty or not ",()=> {
            expect(Ex).is.equal(true);
        });
    });
    describe("Add Data To JSONFile", () => {
        let add = Exu.add();
        it("data is added ",() => {
            expect(add).is.equal(true);
        });
    });
