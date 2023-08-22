/*
 Write a JavaScript function to compute the value of bn where
  n is the exponent and b is the base.
  Accept b and n from the user and display the results.
  */

  function exp(b,n)
  {
     var ans = 1;
     for ( var i=1; i <= n; i++){
        ans = b * ans;
     }
     return ans;
  }

  console.log(exp(2,3));