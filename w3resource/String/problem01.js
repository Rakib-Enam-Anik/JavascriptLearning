//Write a JavaScript function to check whether an 'input' is a string or not.

is_string = function(input){
    if(Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;
};
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 3, 4, 5]));