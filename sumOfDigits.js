function sumOfDigits(num){
    let sum = 0;
    let rem,quo ;
    while(num != 0){
        quo = parseInt(num / 10) ;
        rem = num % 10 ;
        sum += rem ; 
        num = quo ;

    }
    return sum;


}
console.log(sumOfDigits(133));