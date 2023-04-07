// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function CheckJava(str){
    if(str.length < 4){
        return false;
    }
    starts = str.substring(0,4);
    if( starts == 'Java'){
        return true;
    }else{
        return false;
    }
}

console.log(CheckJava("JavaScript"));
console.log(CheckJava("Arif"));
console.log(CheckJava("Java"));