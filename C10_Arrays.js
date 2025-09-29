// Array

/*
An array in JavaScript is a single variable that can hold multiple values in an ordered list.

Values can be numbers, strings, objects, or even other arrays.

Each value is stored at a numbered index, starting from 0.

arr1 = new Array(1,2,3,4)
arr2 = Array(1,2,3,4)

Both are same except for one case:

⚠️ Special Case: Single Numeric Argument
    If you pass one number:
    new Array(5); // or Array(5)
    Creates an empty array of length 5 (with 5 empty slots),not [5].
*/

let arr1 = [1,23,4,5,67,42]
let arr2 = [1,'Prashant','Kumar',2,'Raj','Singh']
let arr3 = new Array(1,2,3,4)
let arr4 = Array(1,2,3,4)
let arr5 = new Array(10)
let arr6 = Array(10)

console.log('arr1: ',arr1 ,'\t', typeof arr1)

console.log(arr1)
console.log(`arr2: ${arr2}`)        // output using string interpolation is stirng not an array (first array get converted to string and then get printed in the terminal)

console.log(`arr3: ${arr3}    --    arr4: ${arr4}`)
console.log(`arr5: ${arr5}    --    arr6: ${arr6}`)

console.log(arr3 == arr4)
console.log(arr5 == arr6)

console.log('\n\n')

// Array methods

console.log('arr1: ', arr1)

arr1.push(5)
console.log(arr1)

arr1.push(3,4,5,44,322)
console.log(arr1)

arr1.pop()
console.log(arr1)

arr1.pop(23)
// Removes and returns the last element of the array.
// Parameter: None (anything you pass is ignored).
console.log(arr1)

/*

unshift and shift:

unshift() : Add element(s) to the beginning of an array.
Syntax: array.unshift(element1, element2, …)
Returns: The new length of the array.

shift(): Remove and return the first element of an array.
Syntax: array.shift()
Returns: The element that was removed.
If the array is empty, it returns undefined.

 */

arr1.unshift(3532)
console.log(arr1)

arr1.shift()
console.log(arr1)

arr1.shift()
console.log(arr1)

/*
include():

array.includes(valueToFind, startIndex)
valueToFind: The element you want to look for.
startIndex (optional): The index to start searching from (default = 0).
Returns: true if found, otherwise false.
*/

let x = arr1.includes(3)
console.log(x,typeof x)

console.log(arr1.includes(5,4))

// indexof():
// if element not present returns -1
console.log(arr1.indexOf(3), arr1.indexOf(5), arr1.indexOf(32333))

/*
------join():

creates a single string from all the elements of an array, separated by a specified separator.
array.join(separator)        separator is optional
The string to insert between elements and returns a string joined all array with separator
Default is a comma (",").
*/

const y = arr1.join()
const y1 = arr1.join('-')
console.log(y, typeof y)
console.log(y1, typeof y1)

/*
----slice():

slice() copies a portion of an array into a new array without changing the original.
start (optional): Index where the copy begins.
    Default: 0
    Can be negative → counts from the end.
end (optional): Index before which to stop copying.
    Not included in the result.
    Default: array’s length.

Returns a new array (shallow copy).
Negative indexes count from the end (-1 is last element).
*/
const myarr = arr2.slice(4,100)
console.log(myarr, typeof myarr)

const negSlice = arr2.slice(-1)
const negSlice1 = arr2.slice(-5,-1)
console.log(arr2)
console.log(negSlice)
console.log(negSlice1)