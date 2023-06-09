/*
Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

var arr1=[3, 'a','a','a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
for (var i=0; i<arr1.length; i++){
    for (var j=1; j<arr1.length; j++){
        if(arr1[i] == arr1[j])
        m++;
        if(mf<m){
            mf=m;
            iteam = arr1[i];
        }
    }
    m=0;
}
console.log(item+"("+mf+" times)");