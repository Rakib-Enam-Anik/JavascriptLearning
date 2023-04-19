//Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function city_name(str){
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
    || (str.substring(0, 3) == 'New')))
    {
        return str;
    }
    return '';
}

console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));