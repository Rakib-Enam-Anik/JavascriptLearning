/*
Write a JavaScript program to search for a given integer in an array of sorted 
integers using the Binary Search Algorithm and recursion.
*/

const binary_Search = (arr, searchValue, low = 0, high = arr.length -1 ) => {
    //base case

    if (high < low || arr.length === 0) return -1
    const mid = low + Math.floor((high - low) / 2)
    //If the element is present at the middle
    if (arr[mid] === searchValue){
        return mid
    }
    //If element is smaller than mid, then
    //it can only be present in left subarray
    if (arr[mid] > searchValue){
        return binary_Search(arr, searchValue, low, mid - 1)
    }
    // Else the element can only be present in right subarray
    return binary_Search(arr, searchValue, mid + 1, high)
}

const myArray = [1, 2, 3, 4, 5, 6, 7 ]
console.log(binary_Search(myArray, 6));
console.log(binary_Search(myArray, 16));