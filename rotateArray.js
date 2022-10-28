function shiftCyclically(arr, n){
    var i = 0
    var j = n-1
    while(i != j){
        let temp;

        temp = arr[i];
        arr[i] = arr[j];
        arr[j]= temp;
        i =i+1
        console.log(arr);
    }
}

var arr = [1, 2, 3, 4, 5];
var n = arr.length;

console.log("Given array is <br>");
for(var i = 0; i< n; i++)
    console.log(arr[i] + " ");
    
shiftCyclically(arr, n);

console.log("<br> Output array is <br>");
for(var i = 0; i < n; i++)
    console.log(arr[i] + " ");