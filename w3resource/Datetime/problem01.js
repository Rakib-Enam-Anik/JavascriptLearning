// Write a JavaScript function to check whether an `input` is a date object or not.

var is_date = function(input){
    if(Object.prototype.toString.call(input) == "[]object Date")
    return true;
    return false;
};

console.log(is_date("October 13, 2014 11:13:00"));
console.log()