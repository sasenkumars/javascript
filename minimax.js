function minMax(a,n){
    let min,max;
    n = a.length;
    let b = [];
    if(n == 1){
     return a;  
    }
    if(a[0] > a[1]){
        b.min = a[0];
        b.max = a[1];
    }
    else{
        b.min = a[1];
        b.max = a[0];
    }

    for(let i=0;i<n;i++){
            if(a[i] > b.max){
                b.max = a[i];               
            }
            else if(a[i] < b.min){
                b.min = a[i];
            
            }
        }
    
    return b;
}
console.log(minMax([2,3,15,6]));