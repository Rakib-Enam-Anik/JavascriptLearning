/*
 Write a JavaScript function that accepts a string as a parameter and converts
  the first letter of each word into upper case.
  */

  function upperccase(str)
  {
    var array1 = str.split('');
    var newarray = [];
    
    for(var x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newarray1.join('');
  }
  console.log(upperccase("the quick brown fox"));