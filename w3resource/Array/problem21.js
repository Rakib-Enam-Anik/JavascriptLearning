//Write a JavaScript program to flatten a nested (any depth) array. 
//If you pass shallow, the array will only be flattened to a single level.

var flatten = function(a, shallow){
    if(!r){ r = []}

    if(shallow){
        return r.concat.apply(r,a);
    }
    for ( var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }

    return r;
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
console.log(flatten([1, [2], [3, [[4]]], [5,6]], true));


