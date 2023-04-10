//Write a JavaScript program to check whether the last digit of the three given positive integers is same.
function last_digit(x, y, z){
    if ((x >0) && y>0 && z>0){
        return (x%10 == y % 10 && y%10 == z % 10 && x%10 == z%10);
    }
    else
     return false;
}

console.log(last_digit(20, 30, 40));
console.log(last_digit(-20, 30, 400));