//Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. 
function two_string(str, n){
    first_part = str.substring(0, n);
    last_part = str.substring(str.length - n);
    return first_part + last_part;
}

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));