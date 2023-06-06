//Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  
function twice3040(arra1){
    let a = arra1[0],
        b = arra1[1];
    return (a === 30 && b === 30) || (a ===40 && b === 40);
}

console.log(twice3040([30, 40]));
console.log(twice3040([40, 40]));
console.log(twice3040([20, 20]));
console.log(twice3040([30]));  