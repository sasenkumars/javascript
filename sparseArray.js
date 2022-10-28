function sparse(a,m,n){
    let count = 0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(a[i][j] == 0){
                count++;
            }
        }
    }
    return count;
}
let m = 3;
let n = 3;
let a =[[1,1,1],[1,1,0],[0,0,1]]
//console.log(sparse(a,m,n));
let c = parseInt( (m * n) / 2);
if(sparse(a,m,n) > c){
    console.log(true);
}
else{
    console.log(false);
}
