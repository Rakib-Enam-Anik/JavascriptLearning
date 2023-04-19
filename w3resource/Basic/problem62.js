//Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
function right_three(str){
    if(str.length > 1){
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;
}

console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));