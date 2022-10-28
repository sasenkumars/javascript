function shiftNegative(a,n){
    start = 0;
    end = n-1;
    while(start <= end){
        if(a[start] <= 0){
            start++
        }
        else{
            [a[start],a[end]] = [a[end],a[start]];
            end--;
        }
    }
    return a;

}
let a = [ -5, 3, -4, 88, -9, -10, 21, -5 ];
let n = a.length;
console.log(shiftNegative(a,n));