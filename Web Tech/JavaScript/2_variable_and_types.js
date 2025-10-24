
// let can not be redeclared 
// three ways to declare a variable: let, var, const

let username = 'GUCSS';        // changeable
const PI = 3.14159;       // constant
let rid = 25;             // number
let idAdmin = true;      // boolean

console.log(name, PI, age, isMember);



//------------->>>>  The Data Type:




// Primitive data types:   

// 1. String
let name = "GUCSS";
console.log(name);           // GUCSS
console.log(typeof name);    // string

// 2. Number
let age = 0;
let pi = 3.14;
console.log(age, pi);        // 25 3.14
console.log(typeof age);     // number

// 3. BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);      // 123456789012345678901234567890n
console.log(typeof bigNumber); // bigint

// 4. Boolean
let isMember = true;
let isAdmin = false;
console.log(isMember, isAdmin); // true false
console.log(typeof isMember);   // boolean

// 5. Undefined
let something;
console.log(something);       // undefined
console.log(typeof something); // undefined

// 6. Null
let emptyValue = null;
console.log(emptyValue);      // null
console.log(typeof emptyValue); // object (JavaScript quirk)

// 7. Symbol
let sym = Symbol("id");
console.log(sym);             // Symbol(id)
console.log(typeof sym);      // symbol






// Reference (non-primitive) types

// 1. Object
let person = { name: "Fahim", age: 25 };
console.log(person);           // {name: "Fahim", age: 25}
console.log(typeof person);    // object

// 2. Array
let fruits = ["apple", "banana", "mango"];
console.log(fruits);           // ["apple", "banana", "mango"]
console.log(typeof fruits);    // object (arrays are objects)
console.log(Array.isArray(fruits)); // true (checks array)

// 3. Function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Fahim"));   // Hello Fahim
console.log(typeof greet);     // function

// 4. Date
let today = new Date();
console.log(today);            // current date and time
console.log(typeof today);     // object

// 5. RegExp
let pattern = /abc/;
console.log(pattern);          // /abc/
console.log(typeof pattern);   // object
