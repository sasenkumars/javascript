function pairInteger(num){
    let a = 0;
    while( a * a < num){
        let b =0;
        while( b * b < num){
            if(a * a + b * b == num){
                if(a <= b){
                    console.log(a,b)
                }
            }
            b += 1 ;
        }
        a += 1 ;
    }

}
pairInteger(1000);