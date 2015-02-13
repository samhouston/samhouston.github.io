/* example13.js
Namespaces*/
//ANTI PATTERN, DECLARING EVERYTHING GLOBALLY
function calculateVat(prod) {
    return prod * 1.29;
}
function doCalculations() {
    var p = new product(100);
    alert(calculateVat(p.getPrice()));
}

//LET'S PUT EVERYTHING IN A NAMESPACE
var builder = function(){
	var app = app || {};
	app.calculateVat = function (prod) {
	    return prod * 1.21;
	}
	app.doCalculations = function(){
	    alert(calculateVat(100));
	}
	return app;
}
var APP = builder();
console.log(calculateVat(34.09));
console.log(APP.calculateVat(34.09));