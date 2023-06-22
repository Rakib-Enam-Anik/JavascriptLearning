/*
We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
*/

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

function Ordinal(n){
    var o = ["th","st","nd","rd"];
    x = n%100;
    return x+(o[(x-20)%10] || o[x]||o[0]);
}

for(n = 0; n < color.length; n++){
    var ordinal = n+1;

    var output = (Ordinal(ordinal) + "choice is " + color[n] + ".");

    console.log(output);
}