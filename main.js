module.exports = {
  calcTax: function ( taxable ) {

    if( taxable < 10 ){

    taxes = taxable * 0.10;

  } else if( taxable < 20 ){

    var m = (10 * 0.10) + (taxable - 10) * 0.07;

    taxes = Math.round(m * 100) / 100;

  } else if( taxable < 30 ){

    var mn = (10 * 0.10) + (10 * 0.07) + (taxable - 20) * 0.05;

    taxes = Math.round(mn * 100) / 100;

  } else if( taxable > 30 ){

    var mny = (10 * 0.10) + (10 * 0.07) + (10 * 0.05) + (taxable - 30) * 0.03;

    taxes = Math.round(mny * 100) / 100;

  }
      return taxes;
  }
}
