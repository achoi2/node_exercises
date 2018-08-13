var printNumbers = function (start, end) {
  for (var i = start; i <= end; i++) {
    console.log(i)
  }
};


var printSquare = function(num) {
  for (var i = 0; i <= num; i++) {
    var str = "";
    for (var j = 0; j <= num; j++) {
      str += "*";
    }
    console.log(str);
  }
};



var printBox = function(c, r) {
    for (var i = 0; i < r; i++) {
      var str = "";
      for (var j = 0; j < c; j++) {
        if ((i === 0 || i=== r-1 || j === 0 || j === c-1)){
          str += "*";
        }else {
          str += " "
        }
      }
      console.log(str);
    }
  };



var printBanner = function(text) {
  console.log(text);
  var arr = text.split("");
  var str = "";

  for (var i = 0; i < arr.length; i++) {
    str += "*";
  }
  console.log(str);
};


var factors = function(num) {
  arr = [];
  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};


var cipher = function(str, offset) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var empty = '';

      for (char of str) {
        var i = letters.indexOf(char);
        var ceasar = letters[i += offset];
        empty += ceasar;

    }
    return empty
};



var leetspeak = function(string) {
  var letters = { 'a': 4, 'e': 3, 'g': 6, 'i': 1, 'o': 0, 's': 5, 't': 7 };

  for (char of string) {
    return char
    }

};


var sumNumbers = function(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum
};


var positiveNumbers = function(numbers) {
    var newArr =  numbers.map(function(number) {
        if (numbers[number] >= 0) {
            return number
        }
    });
    return newArr;
};


module.exports = {
    printNumbers: printNumbers,
    printSquare: printSquare,
    printBox: printBox,
    printBanner: printBanner,
    factors: factors,
    cipher: cipher,
    leetspeak: leetspeak,
    sumNumbers: sumNumbers,
    positiveNumbers: positiveNumbers
}