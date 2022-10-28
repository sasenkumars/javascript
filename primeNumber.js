function primeNumber(num){
    if(num == 1 || num  == 0) return false ;
    for(let i = 2;i < num ;i++){
        if( num % i == 0 ) return false;
    }
    return true ;


}
function allPrime(n){
    for(let i = 1;i <= n;i++){
        if(primeNumber(i) == true){
            console.log(i);
        }
    }
}
allPrime(15);