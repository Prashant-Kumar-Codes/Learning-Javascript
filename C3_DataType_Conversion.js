let score = 33
let score1 = '33'
let score2 = '33aa'

console.log('Type of score: ', typeof(score))
console.log('Type of score1: ', typeof(score1))
console.log('Type of score2: ', typeof(score2))

let value_in_number = Number(score)
let value_in_number1 = Number(score1)
let value_in_number2 = Number(score2)

console.log('Type of value_in_number: ', typeof(value_in_number1),'\t-->  ', value_in_number)
console.log('Type of value_in_number1: ', typeof(value_in_number1),'\t-->  ', value_in_number1)
console.log('Type of value_in_number2: ', typeof value_in_number2,'\t-->  ', value_in_number2)

// '33' -> 33
// '33abc' -> NaN       // NotaNumber (when not convertable)


//  converting boolean to number

let bool_is_logged_in = true
let num_is_logged_in = Number(bool_is_logged_in)

console.log('bool_is_logged_in: ', bool_is_logged_in)
console.log('num_is_logged_in: ', num_is_logged_in)

// true -> 1
// false -> 0

//  converting number, string to boolean

let num1 = 1
let num0 = 0
let num2 = 2
let str_empty = ''
let str_n = 'n'
let str_space = ' '

let bool_num1 = Boolean(num1)
let bool_num0 = Boolean(num0)
let bool_num2 = Boolean(num2)
let bool_str_empty = Boolean(str_empty)
let bool_str_n = Boolean(str_n)
let bool_str_space = Boolean(str_space)

console.log('bool_num1: ', bool_num1)
console.log('bool_num0: ', bool_num0)
console.log('bool_num2: ', bool_num2)
console.log('bool_str_empty: ', bool_str_empty)
console.log('bool_str_n: ', bool_str_n)
console.log('bool_str_space: ', bool_str_space)

// 1 -> true
// 0 -> false
// >=1 -> true
// '' -> false
// ' ' -> true
// 'n' -> true


// converting number, boolean to string

let num = 2
let true_ = true
let false_ = false

let str_num = String(num)
let str_true_ = String(true_)
let str_false_ = String(false_)

console.log('str_num: ', str_num, typeof(str_num))
console.log('str_true_: ', str_true_, typeof(str_true_))
console.log('str_false_: ', str_false_, typeof(str_false_))

console.log(typeof(String(true)))