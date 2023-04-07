var containsDuplicate = functions(nums){
    let found = new Set(nums);
    return found.size !==nums.length;
};