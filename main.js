module.exports = {
  calcTax: function ( taxable ) {



    if( taxable < 10 ){

    taxes = taxable * .10;

  } else if ( 10 < taxable < 20){

    var m = (10 * .10) + (taxable - 10) * .07;

    taxes = Math.round(m * 100) / 100;

  }
    return taxes;
  }
}
