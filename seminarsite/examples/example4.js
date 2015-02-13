/* example4.js 
	typeof operator usage
*/

// Numbers
var a = 37, b= 3.14, c = Infinity, d = NaN, e = "", f = "bla", g = true, f = false,
i = undefined, i2, j = {a:1}, k = [1,2,3], l = new Date(), m = function() {}, n = Math.sin;
console.log(typeof a); // number
console.log(typeof b);// number
console.log(typeof c); // number
console.log(typeof d); // Despite being "Not-A-Number"

// Strings
console.log(typeof e); //string
console.log(typeof f); //string
console.log(typeof (console.log(typeof 1))); // console.log(typeof always return a string

// Booleans
console.log(typeof g); // boolean
console.log(typeof h); //boolean
// Undefined
console.log(typeof i); // undefined
console.log(typeof i2); // an undefined variable


// Objects
console.log(typeof j); // object

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
console.log(typeof k); //object
console.log(typeof l); //object

// Functions
console.log(typeof m); // function
console.log(typeof n); // function