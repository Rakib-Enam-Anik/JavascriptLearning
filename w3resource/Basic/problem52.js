//Write a JavaScript program to convert the letters of a given string in alphabetical order. 
function alphabet_Soup(str){
    return str.split("").sort().join("");

}

console.log(alphabet_Soup("Python"));