const num = 3456

console.log(num)
console.log(num.toString(),'\t',typeof(num.toString()));     // toString method changes to datatype to string

/* Like toString method there is no toNumber */

console.log(num.toString().length)

console.log(num.toFixed(2), typeof(num.toFixed(3)))     // Formats a number as a string with a fixed number of digits after the decimal point and rounds it also.

console.log(num + num.toFixed(5), typeof(num + num.toFixed(5)))       // concatinate as a string

console.log(num + Number(num.toFixed(5)))       // to actually add numbers need to convert the string to number due to toFixed() method using Number()

const num2 = 92.4358

console.log(num2.toPrecision(10))       //Formats a number into a string with a specified total number of significant digits (not just decimal places) and rounds it.


const tens = 100000000
console.log(tens.toLocaleString(),'\t', tens.toLocaleString('en-IN'))
//toLocaleString() formats a number, date, or other locale-aware object into a string according to the user’s locale (language + region) and optional formatting options.
//  syntax:     number.toLocaleString([locales[, options]])

