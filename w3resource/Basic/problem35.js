//Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
function check_char(str1, char){
    ctr = 0;
    for(let i=0; i<str1.length; i++){
        if((str1.charAt(i) == char) && (i >= 1 && i<=3)){
            ctr=1;
            break;

        }
    }
    if(ctr==1) return true;
    return false;
}
console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "y"));
