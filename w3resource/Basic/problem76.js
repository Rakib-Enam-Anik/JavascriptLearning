// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
function started(nums){
    var array1 = [];
    array1.push(nums[0], nums[nums.length  - 1]);

    return array1;
}

console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));