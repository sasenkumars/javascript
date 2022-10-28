function fibo(n){
    let a = 0;
    let b = 1;
    let c = 0 ;
    for(let i = 1;i <= n;i++){
        a = b;
        b = c;
        c = a + b ;

        console.log(b)
    }
    
}
fibo(8);