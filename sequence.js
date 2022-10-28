function sequence(a,n){
    let b =[];
    let max = 0,count = 0;
    a.sort((a,b)  => a-b);
    b.push(a[0]);
    for(let i=0;i<n;i++){
        if(a[i] != a[i-1]){
            b.push(a[i]);
        }
    }
    for(let i=0;i<b.length;i++){
        if(i>0 && b[i] == b[i-1] + 1){
            count++;
        }
        else{
            count = 1;
        }
        max = Math.max(count,max)
    }
    return max;
}
let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
        let n = arr.length;
        console.log(
        "Length of the Longest consecutive sequence is "
        +sequence(arr, n)
        );