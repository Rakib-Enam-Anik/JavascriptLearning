// Write a JavaScript function to extract unique characters from a string.

function unique_char(str1)
{
    var str=str;
    var uniql="";
    for (var x=0; x < str.length; x++){
        if(uniql.indedexOf(str.chart(x))==-1){
            uniql += str[x];

        }
    }
    return uniql;
}

console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));