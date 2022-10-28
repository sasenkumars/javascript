function minimumLecture(m,n){
    let ans = 0;
   if(n < Math.ceil(0.75 * m))
    ans = Math.ceil(((0.75 * m) - n) / 0.75) ;
    else 
     ans = 0;
    
     return ans;

}

console.log(minimumLecture(4,3));