// Write a JavaScript function that reverses a number.

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(Number(reverse_a_number(32243)));