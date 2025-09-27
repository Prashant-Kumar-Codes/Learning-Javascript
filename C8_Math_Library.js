console.log(Math)
console.log(Math.abs(-2), Math.abs(3))      // return the absolute value
console.log(Math.round(88.34567))       // takes only one argument and round to whole number
console.log(Math.ceil(3.5))
console.log(Math.floor(33.45))
console.log(Math.max(3,4,55,66,23,532))
console.log(Math.min(3,4,55,66,23,532))

console.log(Math.random())      // returns a number in range (0,1)
console.log(Math.random()*10+1)
// multiply by 10 to get a number and added by 1 to avoid the case of 0.0___
console.log(Math.floor(Math.random()*10+1))
// used floor to get a interger not decimals

// formula to print random numbers within in limit
const min = 1000
const max = 9999
console.log(Math.floor((Math.random()) * (max - min + 1) + min))
