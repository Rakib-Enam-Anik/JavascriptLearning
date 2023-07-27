//Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.  

var gcd = function(a,b){
    if(!b){
        return a;
    }

    return gcd(b, a%b);
};

console.log(gcd(2154, 458));
