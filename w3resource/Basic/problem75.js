// Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
function middle_elements(a,b)
{
    var new_array = []
    new_array.push(a[1], b[1]);

    return new_array;

}
console.log(middle_elements([1,2,3],[1,5,6]));
console.log(middle_elements([3, 3, 3]), [2, 8, 0]);
console.log(middle_elements([4, 2, 7], [2, 4, 5]));