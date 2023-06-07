// Array.prototype.map()

var numbers = [1, 3, 3, 4, 5, 6];

var result = numbers.map((num)=>{
    return 2 * num;
});

console.log(result);