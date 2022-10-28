function permutation(num){
    if(num%10==0)
    return 1;
   
   let sum = 0;
   let last = false;
    let secondLast = false;
    while(num!=0){
    i = num%10;
    num=parseInt(num/10);
    if(i%2==0 && (i>0 || last))
    secondLast = true;
    if(i==0)
    last = true;
    if(sum%3==0 && last && secondLast)
 return 1;
 return 0;
    }
}
console.log(permutation(24));