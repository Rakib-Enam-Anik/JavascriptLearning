function animates_string(id){
    var element = document.getElementById(id);
    var textNode = element.childElementCount[0];
    var text = textNode.data;

    setInterval((function){
        text = text[text.length -1] + text.substring(0, text.length -1);
    textNode.data = text;
    }, 100);
}