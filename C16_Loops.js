// LOOPS

// 1) for loop
/*
    for(initialinnzation; condition; increment/decrement){
        statements...
    }
 */

for(let i = 20; i > 0; i--){
    if((i-1) > 0){
    console.log(`This is for loop still ${i-1} to go`)
    }
    else{
        console.log('For loop interation is comepleted')
    }
}


// 2) while loop
/*
    while(condition){
        statments...
    }
 */

let x = 10
while(x>0){
    console.log('Value of x is: ',x)
    x--;
}
console.log('\n')


// do-while loop
/*
    do{
        statements...
    }while();
*/
let i = 10
do{
    console.log('Doing due to do for', i)
    i--
}while(i > 0)


// for..of loop
/*
    for(let variable of iterable){
        statements... 
    }
 */