function isPrime(n){
    for(let i=2;i <= Math.sqrt(n);i++){
        if(n % i == 0) return false;
    }   
         return true ;
    
}
function sumPrime(n){
    for(let j=2;j <= n /2;i++){
        if(isPrime(j) && isPrime(n - j)){
            console.log(`${j} ${n - j}`);
        }
    }
}
sumPrime(15);
