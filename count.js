function getsumCount(n){
    let count = 0;
    let sum = 0;
    while(n != 0){
        count = count + 1 ;
        sum = sum + n % 10 ;
        n = parseInt(n / 10);

    }
    return console.log(`${sum} ${count}`);
}
getsumCount(222314);