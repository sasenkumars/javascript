let n =7;
function prime(n){
    if(n < 2) return n;
    for(let i = 2;i < n;i++){
        if( n % i == 0){
            return false;
        }
    }
    return true;
}
for(i=2;i<=10;i++){
    if(prime(i) == true){
        console.log(i)
    }
};

