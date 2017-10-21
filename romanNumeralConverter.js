function convertToRoman(num) {
    var decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var asRoman = '';

  for (var i = 0; i < decimal.length; i++) {
    while (decimal[i] <= num) {
      asRoman = asRoman + roman[i];
      num = num - decimal[i];
    }
  }

  console.log(asRoman);
}

convertToRoman(2000);
