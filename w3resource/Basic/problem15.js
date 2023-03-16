/* Write a JavaScript program to get the difference between a given number and 13, if the number
 is greater than 13 return double the absolute difference.
 */
function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}

console.log(difference(32))
console.log(difference(11))