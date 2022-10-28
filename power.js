function power(base,ex){
    let result = 1;
    for(let i=0;i < ex;i++){
        result = result * base;
        
    }
return result;
}
console.log(power(10,2));