// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
function positive_negative(x,y){
    if((x<0 && y>0) || x>0 && y<0){
        return true;
    }
    else{
        return false;
    }
}

console.log(positive_negative(2,2));
console.log(positive_negative(-2,2));
console.log(positive_negative(2,-2));
console.log(positive_negative(-2,-2));