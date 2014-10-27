/*example11.js
Object DIU
*/

//declaring new objects
var a = {};
var b = new Object();
var c = {
	hi: "I am object",
	msg: "and I am being declared",
	processThis: function(arg){
		console.log("This is my explicit arg: "+arg);
	}
};

//pushing and accesing fields
a.hello = c.hi;
console.log(c.msg); //and I am being declared
console.log(c["msg"]); // and I am being declared

c.hi = "Allo";
// Primitive values are passed by copy
console.log(a.hello);
console.log(a.hi);

a.pro = c.processThis;
c.processThis: function(arg){
	console.log(arg.toUpperCase());
}
// objects are also passed by copy
console.log(a.pro("mir"));
console.log(c.processThis("mir"));

// JSON declaration, stringification and parsing
var toParse = {
	message: 9090,
	p: 7,
	q: 5,
	e: 2
}
var stringy = JSON.stringify(toParse);
console.log(stringy); // {"message":9090,"p":9,"q":5,"e":3} 
console.log(typeof stringy); // string
var reparse = JSON.parse(stringy);
console.log(reparse); // Object {message: 9090, p: 9, q: 5, e: 3} 
console.log(typeof reparse) //object