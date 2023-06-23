//Write a JavaScript program to find duplicate values in a JavaScript array.

function find_duplicate_in_array(arra1){
    var object = {};
    var result = [];

    arra1.forEach(function (item){
        if(!object[item])
           object[item] = 0;
           object[item] += 1;
    })

    for (var prop in object){
        if(object[prop] >= 2 ){
            result.push(prop);
        }
    }

    return result;
}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 7, 7, 0, 6, 5]));