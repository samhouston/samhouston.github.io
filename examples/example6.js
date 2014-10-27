/* example6.js
NaN*/
var x = 9;
var y = x / 0;
var z = x / "9";
var a = x / "nine";
var b = NaN;
console.log(y, z, a); //Infinity, 1, NaN
console.log(a == b); // false
console.log(NaN == b); // false
console.log( x / parseInt(z));
console.log( x / Number(z));