/* example3.js
Javascript Syntax Basics */
//This is a single lined comment
// This is also a single lined comment
/*
THis is a multilined comment.
Just like Java and C.
*/

/* Variable declaration and assignment */
var x = 2
var y = 4
var p = "3"
var g = 10
var z = true
var w = false

/* Unary Operators / Unary Negation */
console.log(x++); // 2, will become 3
console.log(++x); // 4
console.log(x--); // 4, will become 3
console.log(-x); // -3

/* Binary / Arithmetic Operators */
console.log(x + y); // 7
console.log(x - y); // -1
console.log(y / x); // 1.3333
console.log(y * x); // 12
console.log(y % x) // 1
console.log("Let's get "+"jiggy with it.");
console.log(true + x); // 3
console.log("red" + 5) // red5

/*Comparison Operators*/
console.log(x == y) // false
console.log(x < y); // true
console.log(x <= y) // true
console.log(x > y); // false
console.log(x >= y) // false
console.log( x != y); // true
/* Equal operator attempts to parse variables 
of different types to see if they have the same value*/
console.log(x == p) // true
// Identical: Same value and type
console.log(x === p); //false

/* Logical Operators*/
console.log(!z) // false
console.log(z && w) // false 
console.log(z || w) // true
console.log((z && w) || (z || w)) // true
console.log((z && w) ? "this is true": "this is false"); // this is false;

/* Assignment Operators*/
var s = 78, h = 90;
s = 90909;
console.log(s); //90909
g += 8;
console.log(g); // 18
h -= g;
console.log(h); // 72;
s /= 9;
console.log(s); // 10101;
s *= 4;
console.log(s);// 40404:
s %= 4;
console.log(s); // 0;

obj = {oh: "my"};
array = ["oh","my"];
console.log(obj, array) // {oh: "my"} ["oh","my"]

// Case-sensitive identifiers
var shACS = 90;
var shacs = 87;
console.log(shacs, shACS);// 87 90
console.log(SHACS) //Error: SHACS is not defined

/* Initial values */
var dood;
console.log(dood); //undefined
console.log( true && dood) // undefined
console.log( false && dood) // false
