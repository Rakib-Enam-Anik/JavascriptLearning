//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

function removeDuplicates(num){
    var x,
    len=num.length;
    out=[],
    obj={};
     for(x=0; x<len; x++){
        obj[num[x]]=0;
     }
     for (x in obj){
        out.push(x);
     }
     return out;
}
var Mynum = [1, 2, 3, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuolicates(Mynum);
console.log(Mynum);
console.log(Mynum);
console.log(result);