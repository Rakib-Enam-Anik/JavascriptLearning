/*
Write a JavaScript program that accepts a number as input and inserts 
dashes (-) between each even number. 
For example if you accept 025468 the output should be 0-254-6-8.
*/

const num=window.prompt();
const str = num.toString();

const result = [str[0]];

for (let x=1; x<str.length; x++){
    if((str[x-1]%2 === 0) && (str[x]%2 === 0))
    {
        result.push('-', str[x]);
    }
    else
    {
        result.push(str[x]);

    }
}
console.log(result.join(''));