//rest operator 

function myFunc(a, ...params){
    console.log(a);
    console.log(params);
}

myFunc(4, 5, 6, 7, 8, 9);