//Write a JavaScript function to retrieve the value of a given property from all elements in an array.

var library = [
    {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    {author:  'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of the Hunger Games', libraryID: 3245}
];

function property_value(array, property_key){
    var arr = [],
    index = -1,
    arrlen = array.length, array_items;
while (++index < arrlen){
    array_items = array[index];
}

if(array_items.hasOwnproperty(property_key)){
    arr[arr.length] = array_items[property_key];
}

}

return arr;

}

console.log(property_value(library,'title'));
console.log(property_value(library, 'author'));