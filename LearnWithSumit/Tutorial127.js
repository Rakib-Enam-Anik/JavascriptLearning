const jsonString = '{"name":"John", "age":30, "city":"New York"}';

console.log(jsonstring);

//convert to valid js object

const myObj = JSON.parse(jsonString, function(key, value){
    if(key === "birth"){
        return new Date(value);
    }
    return value;
});

console.log(myObj);
 