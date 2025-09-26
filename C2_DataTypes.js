"use strict";       //show that we are using new version of js for coding *(it is applied defaultly by js)

//alert(3+3) // this will not work here as we are using nodejs, not browser for compilation

// single '' and double "" quote works in js as same as python

let name = 'Prashant'
let age = 18
let is_working = true

/* 
Data_Types:
1) numbers
2) string :- inside the quotes
3) boolean :- true/false
4) null :- standalone value (it is actually a js object)
5) undefined :- when variable is passed but value is not given ()
6) symbol :- unique
7) object

*/

console.log(typeof age);
console.log(typeof name);
console.log(undefined); //undefined because it is a type
console.log(typeof null); // object