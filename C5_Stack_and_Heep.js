// Stack Memory - for - Primitive DataTypes
// Heap Memory - for - Non-Primitive DataTypes

// When stack memory is used we get copy of the value
// when heap memory is used we get refernece of the value

let name = 'Prashant'

let lastName = name
lastName = 'Kumar'

console.log(name)
console.log(lastName)

let user1 = { email: 'pra@gmail.com', name : 'prashant'}
let user2 = user1

user2.name = 'Prashant_Kumar'   // as object is non-primitive datatype so changing the value changes the original value because we get reference

console.log(user1, user2)
console.log(user1==user2)