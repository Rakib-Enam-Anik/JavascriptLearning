function reverse_number(n){
      n= n + "";
      return n.split("").reverse().join("");
}

console.log(reverse_number( n = prompt("give your number")));