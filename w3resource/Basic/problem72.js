//Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.
function first_last_same(nums){
    var end = nums.length -1;
    if(nums.length >= 1){
        return nums[0] == nums[end];
    } else{
        return false;
    }
}

console.log(first_last_same([10, 20, 30]));