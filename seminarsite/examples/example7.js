/*example7.js
Truthy and Falsey*/
//Automatic type coercion
console.log(true  ==    2 ); // false... true  → 1 !== 2 ←  2
console.log(false ==    2 ); // false... false → 0 !== 2 ←  2
console.log(true  ==    1 ); // true.... true  → 1 === 1 ←  1
console.log(false ==    0 ); // true.... false → 0 === 0 ←  0
console.log(true  ==   "2"); // false... true  → 1 !== 2 ← "2"
console.log(false ==   "2"); // false... false → 0 !== 2 ← "2"
console.log(true  ==   "1"); // true.... true  → 1 === 1 ← "1"
console.log(false ==   "0"); // true.... false → 0 === 0 ← "0"
console.log(false ==   "" ); // true.... false → 0 === 0 ← ""
console.log(false ==   NaN); // false... false → 0 !== NaN
 
//Type checked comparison. Identical operator (no conversion of types and values)
console.log(true === 1);     // false... data types do not match
 
//Explicit type coercion
console.log(true === !!2);   // true.... data types and values match
console.log(true === !!0);   // false... data types match but values differ
console.log( 1  ? true : false); // true.... only ±0 and NaN are “falsy” numbers
console.log("0" ? true : false); // true.... only the empty string is “falsy”
console.log(Boolean({}));    // true.... all objects are “truthy” except null