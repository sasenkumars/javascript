function prime(n){
    if(n == 0 || n == 1) return false;

    for(let i=2;i< Math.sqrt(n);i++){
        if(n % i == 0) return false;
    
    }
    return true;
    
}
    function sumPrime(n) {
        for(let i=2;i<=n/2;i++)
        {
        if( prime(i) && prime(n-i) )
        {
        console.log(i, n-i);
        return;
        }
    }
}
sumPrime(15);