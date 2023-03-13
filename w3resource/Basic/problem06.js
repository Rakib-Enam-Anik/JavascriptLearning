//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
function leapyear(year)
{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2016));
console.log(leapyear(2017));
console.log(leapyear(100));