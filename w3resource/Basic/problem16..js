//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 

//const x = prompt(" Give number of X:");
//const y = prompt(" Give number of y:");

function sumTriple(x,y){
    if ( x == y){
        sum = 3 * (x+y);
        return sum;
    }
    else{
        sum = x+y;
        return sum;
    }
}

console.log(sumTriple(10,17));