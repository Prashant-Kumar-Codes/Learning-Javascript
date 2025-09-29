const name = 'Prashant'
const lastName = 'Kumar'
const num1 = 983
const num2 = 3384

// let x = `${name} + ${num1}`
// console.log(x, typeof x)
// console.log(lastName+name+num1+num2)

// console.log(`(${name} + ${num1}) + (${lastName + num2})`, type(name + num1 + lastName + num2))   //Error

// console.log(num1 + num2 + name + lastName, type(num1 + num2 + name + lastName))  //Error

// console.log(name + lastName + num1 + num2, type(name + lastName + num1 + num2))  //Error

let alpha = new String('hello This is Prashant')

console.log(alpha)
console.log(alpha[1])
console.log(alpha.__proto__)
console.log(alpha.length)
console.log(alpha.toUpperCase())
console.log(alpha.charAt(3))
console.log(alpha.charAt(-1))
console.log(alpha.substring(0,5))   // including start, excpet end index
console.log(alpha.slice(2,4))   //does not accept negative indexing but does not give error instead gives empty stirng
console.log(alpha.at(-1))   // also takes -ve index, better that charAt() method




/*  String Interpolation with Backticks (``)

--  use of ${ ... } placeholder inside backticks for varbles, expressions, functions calls etc.
--  can use multi-line string.
-- no need to use + and , for concatination and showing different datatypes together.

*/
