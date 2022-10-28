function gcd(a,b){
let x = Math.abs(a);
let y = Math.abs(b);
 while(x && y && x != y ){
    if(x > y){
        [x,y] =[x-y,y];
    }
    else{
        [x,y] = [x,y-x];
    }

 }
 return x || y ;
}
console.log( (12 * 16 ) / gcd(12,16));