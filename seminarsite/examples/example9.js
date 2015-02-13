/*example9.js
Arrays DIU
*/
// Array Declaration with Array Literal
var a1 = ["erlang",1024, "javascript", true];
var a2 = [];
// Use of push()
a2.push("python");
a2.push("objective-c");
a2.push("go");
a2.push(45050);
// Array declaration with Constructor Function
var a3 = new Array("c","c++",9090);
var a4 = new Array();
a4.push("ada");
a4.push("fortran");
a4.push(787878);

console.log(a1, a2, a3, a4);
// using the length property
console.log(a1.length, a2.length, a3.length, a4.length);
// accesing elements by index
console.log(a1[0], a2[0], a3[0], a4[0]);
console.log(a1[1], a2[2], a3[-1], a4[-2]);
// using join()
var ax = a1.join();
console.log(ax);
// using slice(x,y)
var as = a2.slice(1,3);
console.log(as);