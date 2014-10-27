/*example10.js
Function declaration and argument modification
*/
//declaring a function in the global namespace
function loggy(arg){
	console.log(arg);
}
loggy("A113"); //A113
function loggie(arg){
	return arg + 5;
}
console.log(loggie("A113")); //A1135
// declaring a function as a variable
var varFunc = function(factor){
	return factor * 5;
}
console.log(varFunc(9010)); // 45050
// functions as arguments
var argFunc = function(func){
	console.log(func(30));
}
argFunc(varFunc); //150
argFunc(function(arg){
	console.log(50 + arg)
}); //80
// arguments as an array-like object
var argsFunc = function(){
	console.log(arguments[2] * 90);
	console.log(arguments.length);
	console.log(arguments);
}

argsFunc(233,434,222); //19980 3 [233, 434, 222] 
argsFunc();// NaN 0 []

// intializing inside a function
// and using outside the function

var outside;
var inside = function(){
	outside = function(a, b){
		console.log(a + b);
	}
}
inside();
outside(133,133); //266