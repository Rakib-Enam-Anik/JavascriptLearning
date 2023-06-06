// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3. 

function contains13(nums){
    if(nums.indexOf(1) != -1 || nums.indexOf(3) != -1){
        return true
    }else{
        return false
    }
}

console.log(contains13([1,5]));
console.log(contains13([2, 3]));
console.log(contains([7,5]));