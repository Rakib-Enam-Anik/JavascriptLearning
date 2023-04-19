//rite a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
function nop(str){
    let start_pos = 0;
    let end_pos = str.length;

    if(str.length > 0 && str.charAt(0) == 'p'){
        start_pos = 1;
    }

    if (str.length > 1 && str.charAt(str.length - 1) == 'p'){
        end_pos--;
    }
    return str.substring(start_pos, end_pos);
}

console.log(nop("Python"));
console.log(nop("Python"));
console.log(nop("JavaScript"));