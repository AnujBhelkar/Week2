var read = require("readline-sync")
var expect = require("chai").expect;
var leap =require("../../utility/utility");
describe("Leap Year", function(){
    it("check the Year is leap", function(done){
        this.timeout(5000);
        setTimeout(done, 5000);
        let l = Number(leap.leap_year());
        expect(l).to.equal(1);
        done();
    });
});