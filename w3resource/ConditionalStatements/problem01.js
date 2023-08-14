var num1, num2;

if(parseInt(num1, 10) > parseInt(num2, 10))
{
    console.log("The larger of" + num1 + "and" + num2 + "is" + num1+ "." );
}
else if(parseInt(num2, 10) > parseInt(num1, 10)){
    console.log("The larger of" + num1 + "and" + num2 + "is" + num2+ "." );
}
else
{
    console.log("The values"+ num1+ "and" + num2 + "are equal.");
}