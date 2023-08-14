//Write a JavaScript function that returns a string that has letters in alphabetical order.

function alphabet_orders(str){
    return str.split('').sort().join('');
}
console.log(alphabet_orders("RakibEnam"));