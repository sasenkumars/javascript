function triangle(n){
     let star ='';
    for(let i=0;i<=n;i++){
       for(let j=0;j< n- i * 2;j++){
        star += ' '
       }
       for(let k=0;k< i * 2 -1;k++){
        star +='*'
       }
        star +='\n';
    }
    return star ;
}
console.log(triangle(5));