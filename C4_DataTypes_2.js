// DataTypes - 1) Primitive     2) Non-Primitive

// Primitive :
//      7 types- String, Number, Boolean, null, undefined, Symbol, BigInt

let name = 'Prashant'
const age = 18
const isStudent = true
let isIntelligent = null
let mob_num;
let x = '123'
let y = '123'
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(x == y)
console.log(id == anotherId);

const bigNum = 2222222222444444444444422222222n


// Reference (Non-Primitive) :
//      Array, Objects, Functions

//array
let names = ['Prashant','Raj','Tushar','Sumit','Kamal']

//object
let myObject = { name:'Prashant', age:'18'}

const myFunc = function(){ // its type is function but actually it is called functioin type
    console.log('Hello this is Prashant Kumar')
}


console.log(typeof bigNum)
console.log(isIntelligent, '\t' , typeof isIntelligent)
console.log(typeof myFunc)