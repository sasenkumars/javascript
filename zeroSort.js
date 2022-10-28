function zero(a,n){
    let i = 0;
    let j = n-1;
    while(i<=j){
        if(a[i] <= 0){
          i++;
        }
        else{
            [a[i],a[j]] = [a[j],a[i]];
            j--
        }
      
    }
    return a;
}
let a =[0,1,1,0,1,0,0,15];
let n = a.length;
console.log(zero(a,n));