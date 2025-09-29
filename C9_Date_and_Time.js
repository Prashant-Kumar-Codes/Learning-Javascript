// Dates
// In JS Date is object so we need to create a instant to use its methods

let myDate = new Date()
console.log(myDate)
console.log(typeof myDate)

// -- formating the output
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

// when passing or printing month by giving argument to Date remember that it used Month Index i.e. actual Month - 1

let date_obj = new Date(2025,10,28)
console.log(date_obj.toDateString())

let date_time_obj = new Date(2025,10,28,9,4)
console.log(date_time_obj.toLocaleString())

// if we want a date time in specific format
let format_date1 = new Date('2025-09-28')   // yyyy-mm-dd
console.log(format_date1.toLocaleString())
console.log(format_date1.toLocaleDateString())

/*
let fomate_date2 = new Date('28-09-2025')   // dd-mm-yyyy
console.log(fomate_date2.toLocaleDateString())

// REASON OF ERROR:
    --'28-09-2025' is not a valid date format for the Date constructor.
    --new Date() follows ECMAScript parsing rules, which expect either:
    --A full ISO 8601 format (YYYY-MM-DD), or
    --A format recognized by the browser/engine’s locale (commonly MM/DD/YYYY).
    --'28-09-2025' is DD-MM-YYYY, so the parser can’t recognize it and returns an Invalid Date.

*/

let formate_date3 = new Date('09-28-2025')  //mm-dd-yyyy
console.log(formate_date3.toLocaleString())
console.log(formate_date3.toLocaleDateString())

let myTimeStamp = Date.now()
//  It returns the current timestamp in milliseconds since the Unix Epoch (January 1, 1970, UTC).

let myTimeObj = new Date('09-28-2025')  //  To get data of specific date

console.log('myTimeStamp: ', myTimeStamp)
console.log('myTimeObj: ',myTimeObj.toLocaleTimeString())
/* Imporant and mainly used Date methods: 
    --getTime
    --getDay
    --getHours
    --getFullYear
    --getMiliseconds
    --getMinutes
    --getMonth      //to get actual month --> +1
    --getSeconds
*/

console.log(myTimeStamp)
console.log(myTimeObj.getTime())

// WE  MORE CUSTOMIZE THE OUTPUT OF THE Date METHOD USING toLocaleString()
const x = Date()
console.log(x)

x.toLocaleString('default',{
    // here pass arguments to customize
})