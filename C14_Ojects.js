/*Object:
    An javascript object is a collection of key-value pairs.
        Keys are called properties (or methods if the value is a function).
        Values can be anything: number, string, array, function, or another object.
 
    Creating an Object:     (two important methods)
        1) Object Literal: 
            let object_variable = {key1: value, key2: value, ...}

        2) new Object():
            let object_variable = new Object()
            object_variable.key1 = value
            object_variable.key2 = value
            .
            .

        3) Using Constructor Function
            function Car(model, year) {
                this.model = model;
                this.year = year;
            }
            let car1 = new Car("BMW", 2022);

        4) Using class (ES6+)
            class Student {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            }
            let s1 = new Student("Kumar", 21);

    By creating object using literal singleton object is not formed while by creating though constructor singleton object is formed and there is no other difference like speed, memory etc.

 */

date_time_var = new Date

// declaring symbol
const mySymbol1 = Symbol('key9')
const mySymbol2 = Symbol('key10')

let details = {
    name : 'Prashant Kumar',
    age : 18,
    city : 'city',
    email : 'prashantkumar@google.com',
    isLoggedIn : false,
    paraents_name : ['fathers_name', 'mothers_name'],
    accessing_time : {time: date_time_var.toLocaleTimeString(), date: date_time_var.toLocaleDateString()},
    mySymbol1 : 'this is symbol but when type check it is string',
    [mySymbol2] : 'this is original symbol use [] for key also for symbol'
}

console.log(details)
console.log(details.name, typeof details.name, '\t', details['name'], typeof details['name'])
// remember 'name' not name because when using [] for calling it suppose even keys to be strings not just like using with .key .

console.log(details.mySymbol1, details[mySymbol2], '\n', typeof details.mySymbol1, typeof details[mySymbol2], '\n', details.mySymbol1,'\n', details[mySymbol2],'\n')

// when called symbol use [] because symbol can only be given as keys using []

// we can simply overwrite the values:
details.mySymbol1 = 'mysymbol1'
console.log(details)

// we can simple restrict the overwriting the values by freeze
Object.freeze(details)

details[mySymbol2] = 'mysymbol2'
console.log(details)

// we didn't get error and the value didn't changed



 