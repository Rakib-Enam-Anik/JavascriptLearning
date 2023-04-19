//Write a JavaScript program to create a new string without the first and last character of a given string. 
function without_first_end(str){
    return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('js'));
console.log(without_first_end('PHP'));