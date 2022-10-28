function largestAmongThree(a,b,c){
    if(a >= b && a >=c) return a;

    else if(b >= a && b >= c) return b;

    else  return c ;

     
}
console.log(largestAmongThree(2,3,3));