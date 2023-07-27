/*
Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"
*/

function longest_common_starting_substring(arr1){
    var arr= arr1.concat().sort(),
    a1= arr[0], a2=arr[arr.length-1], L= a1.length, i=0;
    while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, 1);
}

console.log(longest_common_starting_substring(['go', 'google']));
console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial']));
console.log(longest_common_starting_substring(['abcd', '1234']));