/* example8.js
Declaration, access and String Methods */
var huckle = "Mark Twain";
var illiad = "Homer";
var simpson = "Homer";

console.log(illiad == simpson); // true
console.log(huckle.charAt(0)); // M
/* Works in some browsers */
console.log(huckle[0]);  // M
console.log(huckle.indexOf("a")); //1 ... returns the first match
console.log(huckle.length, illiad.length); // 10, 5

/* Testing for Regular Expressions */
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);
console.log(matches_array); // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

console.log(illiad.slice(0, 2)); //Ho
console.log(huckle.substring(0,5)); //Mark
console.log(huckle.substring(5,0)); //Mark
console.log(illiad.toUpperCase()); // HOMER
console.log(huckle.toLowerCase()); // mark twain
console.log(illiad.concat(huckle)); //HomerMark Twain
