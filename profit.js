function profit(a,n){
    let price = 0;
    for(let i=1;i<n;i++){
        if(a[i] > a[i-1]){
            price = price + (a[i] - a[i-1]);
            
        }
    }
    
  return price;  
}
let a = [100,180,260,310,40,535,695];
let n = a.length;
console.log(profit(a,n));