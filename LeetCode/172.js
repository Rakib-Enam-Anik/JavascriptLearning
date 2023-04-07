var trailingZeroes = function(n){
    let pow = Math.log(n) / Math.log(5);
    let result = 0;
    for(let i = 1; i <= pow; i++){
        result += Math.floor(n / Math.pow(5, i));
    };
    return result;
};