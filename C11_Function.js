//A function is a reusable block of code that takes inputs (parameters), performs logic, and optionally returns a value when invoked.

/*
1) function keyword, hoisted, named
function function_name(parameter1, parameter2, ...){
    statements;
}

---------------------------------------------------

2)Function assigned to a variable; can be anonymous or named; not hoisted the same way as declarations.

datatype function_name = function(parameter1, parameter2, ...){
    statements;
}

----------------------------------------------------

3)Arrow function: Concise syntax, lexical this, cannot be used as constructors, no arguments object.

datatype function_name = (parameter1, parameter2, ...) --> statement;

----------------------------------------------------

4) Async function
5) Generator function
6) Immediately Invoked Function Expression (IIFE)
 */


function adding(a,b){
    return a+b
}

add1 = adding(2,5)      //  7
add2 = adding(444,a = 5, b = 4)     //449  
console.log(add1,'\t',add2)

// there is not direct way to give named arguments for providing named arguments we need to object in parameters and aguments as well

const func = function(a,b){
    console.log('func function output')
    return a**b
}
// func
// func()
// func(33.5,3)

console.log(func(2,3))

// Arrow functions
const funcc = (a,b) => {
    console.log('funccccccccccccccccc function output')
    return a**b
}

console.log(funcc(0,0,222))


/*  HIGHER ORDER FUNCTOINS/METHODS:

-- A higher-order function (HOF) in JavaScript is a function that does at least one of these:
    Takes another function as an argument (a callback).
    Returns another function as its result.
    In short:
        👉 Functions that work with other functions (as inputs or outputs).

📌 Why needed?
-- JavaScript treats functions as first-class citizens (you can store them in variables, pass them around, and return them).
-- Higher-order functions make code reusable, cleaner, and more functional.


📌 Common Higher-Order Methods in Arrays
        forEach() → executes a callback for each element.
        map() → transforms each element, returns a new array.
        filter() → returns a new array of elements passing a test.
        reduce() → reduces array to a single value.
        some() / every() → check conditions on elements.
        find() / findIndex() → locate specific elements.

*/