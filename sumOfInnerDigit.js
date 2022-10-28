function sumOfInnerDigit(n){
    let sum = 0;
    if(n.toString().length < 3){
        return -1;
    }
    do{
        n = parseInt(n / 10);
        sum = sum + n % 10 ;
    }
    while( parseInt(n / 100) != 0);
    return sum ;
}
console.log(sumOfInnerDigit(3221));