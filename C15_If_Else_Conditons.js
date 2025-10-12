// if conditon
/*
SYNTAX:
        if(condition){
            statements...
        }
*/
//      || for or
//      && for and


if(1){
    console.log('1 - This is true.')
}
if('1'){
    console.log("'1' - True")
}

// if-else condition
/*
SYNTAX:
        if(condition){
            statements...
        }
        else{
            statements...
        }
 */
if(0){
    console.log('0 - This is true')
}
else{
    console.log('0 - This is false')
}

//if - else if - else
/*
Syntax:
    if(condition){
        statements...
    }
    else if(condition){
        statements...
    }
    else{
        statements...
    }
*/
a = true * false + true - false * 1 + 1
if(a==1){
    console.log('a - True')
}
else if(a==0){
    console.log('a - False')
}
else{
    console.log('a > 1 which is kind of true')
}

// nested if

// ternery operator(? :)
/*
condition ? expression_if_true : expression_if_false
 */
a > 10 ? console.log('a > 10') : console.log('a < 10')

terneryOperatorValue = a>10 ? 'Yes a is greater than 10' : 'No a is less than 10'
console.log(terneryOperatorValue)


// Multiple(chained) Ternery
let marks;
try{
marks = prompt('Enter your marks: ')
}
catch(error){
    let marks = Date.now
    marks = Number(marks.toLocaleeString()) 
    console.log('marks: ', marks)
}
grade = marks >= 90 ? 'A':
        marks >= 80 ? 'B':
        marks >= 70 ? 'C':
        marks >= 33 && marks < 70 ? 'P' : 'Failure'
grade == 'Failure' ? console.log(`Sorry to say but; you are, fail`): console.log(`Based on your marks you gained ${grade} grade`)

