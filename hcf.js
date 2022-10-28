function hcf(a,b){
    let hcf ;
    for(let i=1;i <= a && i <= b;i++){
        if( a % i == 0 && b % i == 0){
            hcf = i;
        } 
    }  
    console.log(hcf);    

}
hcf(7,5);