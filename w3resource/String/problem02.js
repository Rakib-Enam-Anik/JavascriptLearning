//Write a JavaScript function to check whether a string is blank or not.

is_Blank = function(input){
    if(input.length === 0)
    return true;
    else
    return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));
