// testing the Regular Expression demon
//take the function value
let reg = require("/home/admin1/fellowShipPrograms/OOP/RegularExpDemon");
let assert = require('chai').assert;
let expect = require('chai').expect;
    describe("Test case for Name ",() => {
        it("Enter only string ",() => {
            assert.isNotNumber(reg[0]);
        });
        it(" Word Length is greater than 3  ",() => {
            assert.isAbove(reg[0].length,3);
        });
    });
    describe("Test case for Full Name ",() => {
        it("Enter only string ",() => {
            assert.isNotNumber(reg[1]);
        });
        it("Word length is greater than 3 ",() => {
            assert.isAbove(reg[1].length,3);
        });
    });   
    describe("Test case for Mobile Number ",() => {
        it("Enter only Number ",() => {
            let no = parseInt(reg[2]);
            assert.isNumber(no);
        });
        it("Enter Only 10 digit ",() => {
            let no = reg[2];
            console.log(no.length);
            assert.strictEqual(no.length,10,'strict equal');
        });
    });