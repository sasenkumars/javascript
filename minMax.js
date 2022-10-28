function minMax(arr){
    let i = 0;
    let a = [];
    let min,max ;
    let n = arr.length;
    if(n == 1){
        a.min = arr[i];
        a.max = arr[i];

        return a;
    }
    if(arr[0] > arr[1] ){
        a.min = arr[0];
        a.max = arr[1];
    }
    else{
        a.min = arr[1];
        a.max = arr[0];
    }
    for(i=2;i<n;i++){
        if(arr[i] > a.max){
            a.max = arr[i];
        }
        else if(arr[i] < a.min){
            a.min = arr[i];
        }
   }
   return a;

}
console.log(minMax([10, 121, 345, 12, 130, 300]));
