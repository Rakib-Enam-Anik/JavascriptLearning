//Write a JavaScript function to apply the Bubble Sort algorithm.

function bubble_Sort(a){
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i =0; i < n; i++){
            if (x[i] < x[i+1]){
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    
} while (swapp);
return x;
}