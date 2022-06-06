//3.	Currency Format

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
  return function (value) {
    return currencyFormatter(separator, symbol, symbolFirst, value);
  };
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
  let res = Math.trunc(value) + separator;
  res += value.toFixed(2).substr(-2, 2);
    //   console.log(res);

  if (symbolFirst == true) {
    return symbol + " " + res;
  } else {
    return res + " " + symbol;
  }
}

let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71

// createFormatter(',', '$', true, 5345);
