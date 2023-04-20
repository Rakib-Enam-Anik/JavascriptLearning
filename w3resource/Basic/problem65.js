//Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
function end_script(str){
    if(str.substring(str.length - 6, str.length) == 'Script'){
        return true;
    }else{
        return false;
    }
}

console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));