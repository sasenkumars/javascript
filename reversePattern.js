let n = 6;
let star ='';
for(let i=1;i<=n;i++){
    for(let j=1;j<i;j++){
        star += ' ';
    }
    for(let j=i;j<=n;j++){
        star += (j + ' ');
    }
  star += '\n';
}
for(let i=n - 1;i>0;i--){
    for(let j=1;j<i;j++){
        star += ' ';
    }
    for(let j=i;j<=n;j++){
        star += (j + ' ');
    }
  star += '\n';
}
console.log(star);