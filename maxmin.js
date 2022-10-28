function maxMin(a,n){
    console.log(min(a,n));
    console.log(max(a,n));

}

function min(a,n){
    let min = a[0];
for(let i=1;i<n;i++){
    if(a[i] < min){
        min = a[i];
    }
}
return min;
}

function max(a,n){
    let max = a[0];
for(let i=1;i<n;i++){
    if(a[i] > max){
        max = a[i];
    }
}
return max;
}
let a = [2,3,15,6];
let n = a.length;
//console.log(minMax(a,n));
maxMin(a,n);