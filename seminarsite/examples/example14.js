/* example14.js
Prototype Inheritance*/
var goby = {};
goby.val = 90990;
console.log(goby.val);

var gobies = Object.create(goby);
console.log(gobies.val);
gobies.val = 3434;
gobies.__proto__.val = 55;
gobies.__proto__.down = 90;
goby.charm =9999;
console.log(goby.val, goby.down ,goby.charm);
console.log(gobies.val, gobies.down , gobies.charm);