// Write a JavaScript program to compute the sum of an array of integers.  

var array_sum = function(merge_array){
    if(merge_array.length == 1){
        return my_array[0];
    }
    else{
        return my_array.pop() + array_sum(my_array);
    }
};

console.log(array_sum([1,2,3,4,,6]));