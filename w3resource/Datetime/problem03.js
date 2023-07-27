//Write a JavaScript function to get the number of days in a month.

var getDaysInMonth = function(month,year){
    //Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    //Here January is 0 based
    //return new Date(year, month+1, 0).getDate();
};
console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(12,2012));