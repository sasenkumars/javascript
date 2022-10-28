function reverse(a){
    let start = 0;
    let end = a.length-1;
    while(start>end){
        [a[start],a[end]] = [a[end],a[start]];

        start++;
        end--;
    }
    return a;

}
function print(a){
    let n = a.length;
    for(let i=0;i<n;i++){
        console.log(a[i]);
    }
}
let a = [1,2,3,4,5];
console.log(print(a));
console.log(reverse(a));
console.log(print(a));