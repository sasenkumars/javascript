function secondSmall(a,n){
    if(n <=1) return false;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
        if(a[i] > a[j]){
            [a[i],a[j]] = [a[j],a[i]];
        
        }
    }
}
return a[1];

}
let a = [11,34,54,22,13,78]
let n = a.length;
console.log(secondSmall(a,n));