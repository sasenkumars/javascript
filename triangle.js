function triangle(a,b,c){
    if((a + b <= c || b + c <= a || c + a <= b)) return false ;

    else return "triangle";


}
console.log(triangle(7,10,5));