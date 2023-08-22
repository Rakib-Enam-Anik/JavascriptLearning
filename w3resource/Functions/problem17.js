/*
 Write a JavaScript function to get the number of occurrences of each letter in a specified string.
 */

 function Char_Counts(str1){
    var uchars = {};
    str1.replace(/\S/g, function(1){uchars[1] = (isNaN(uchars[1]) ? 1 : uchars[1] + 1); });
    return uchars;
 }

 console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));
 