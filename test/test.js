var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calcTax(15)).to.equal(1.35);
    expect(code.calcTax(19)).to.equal(1.63);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calcTax(25)).to.equal(1.95);
    expect(code.calcTax(29)).to.equal(2.15);
  });

  it('should tax 3% on anything after $30', function(){
    expect(code.calcTax(35)).to.equal(2.35);
    expect(code.calcTax(39)).to.equal(2.47);
    expect(code.calcTax(109)).to.equal(4.75);
  });

});
