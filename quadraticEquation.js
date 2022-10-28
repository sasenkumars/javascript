function quadraticEquation(a,b,c){
    let result = b * b - 4 * a * c ;
if(result > 0){
    let r = (-b + Math.pow(result,0.5)) / (2.0 * a) ;
    let r1 = (-b - Math.pow(result,0.5)) / (2.0 * a); 
    console.log( r , r1);
} 
else if(result == 0){
    let r1 = (-b / (2.0 * a ));
    console.log(r1);
}
else{
    console.log('no roots');

}


}
quadraticEquation(1,5,1);