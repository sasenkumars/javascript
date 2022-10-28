function palindrome(str){

    let len = str.length ;
    for(let i=0;i < len / 2;i++){
    if(str.charAt(i) != str.charAt(len-i-1)) return false;
    }
    return true;
}
 for(let j=1;j<=50;j++){
    if(palindrome(j.toString()))
    console.log(j);
 }

 