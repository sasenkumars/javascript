
function forLoop(n){
    for(let i =1;i<=n;i++){
        if( i % 5 == 0 && i % 3 == 0){
            console.log('indbuzz ',i);
        }
        else if( i % 3 == 0){
            console.log('relevel',i);
        }
        else if( i % 5 == 0){
            console.log('buzz',i);
        }
        else{
            console.log(i);
        }
    }
}
forLoop(100);