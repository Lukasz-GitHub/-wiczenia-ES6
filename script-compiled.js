'use strict';

// Zadanie 1
var a = 'Hello';
var b = 'World';
console.log(a + ' ' + b);

// Zadanie 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

console.log(multiply(2, 5)); // 10
console.log(multiply(6, 6)); //36
console.log(multiply(2)); // 2

// Zadanie 3
var average = function average() {
  for (var _len = arguments.length, theArgs = Array(_len), _key = 0; _key < _len; _key++) {
    theArgs[_key] = arguments[_key];
  }

  return theArgs.reduce(function (a, b) {
    return a + b;
  }) / theArgs.length;
};

console.log(average(1));
console.log(average(2, 3));
console.log(average(1, 3, 6, 6));
console.log(average(5, 5, 5, 5, 5, 5));

// Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// Zadanie 5
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log(firstName + ' ' + lastName);
