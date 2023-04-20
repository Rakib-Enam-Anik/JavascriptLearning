function reverse3(array){
    return array.map((element, idx, arr) => arr[(arr.length -1 ) - idx]);
}

console.log(reverse3([5,4,3]));
console.log(reverse([1, 0, -1]));
console.log(reverse([2, 3, 1]));