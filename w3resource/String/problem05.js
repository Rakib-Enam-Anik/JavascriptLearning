//Write a JavaScript function to convert a string into abbreviated form.

abbrev_name = function (str1){
    var split_names = str1.trim().split("");
    if (split_names.length > 1){
        return (split_names[0] + " " + split_names[1].chart(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));