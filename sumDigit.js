function sumDigit(n){
   let sum = 0;
   let quo,rem;
   while(n != 0){
       rem = n % 10;
       quo = Math.floor(n / 10 ) ;
       sum += rem ; 
       n = quo   
   }
   return sum;
}
console.log(sumDigit(12345));
