// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
chai.should();

var myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    expect(myApp.computeAverage(1,2,3)).to.equal(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    expect(myApp.computeAverage(3, 7, 5)).to.equal(5);
  })
  it("should return 120 as factorial for 5", function() {
    assert(myApp.computeFactorial(5) == 120);
  })
})


describe("Temperature Conversion Functionality", function() {
  it("should return 104 for Celcius value 40", function() {
    myApp.convertTempCtoF(40).should.equal(104);
  })
  it("should return 140 for Celcius value 60", function() {
    assert(myApp.convertTempCtoF(60) == 140);
  })
  it("should return 60 for Fahrenheit value 140", function() {
    assert(myApp.convertTempFtoC(140) == 60);
  })
  it("should return 40 for Fahrenheit value 104", function() {
    assert(myApp.convertTempFtoC(104) == 40);
  })
})
