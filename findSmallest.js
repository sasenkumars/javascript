function findSmallest(a,b,c){
    let count = 0;
    while(a && b && c != 0){
        count += 1;
        a--;
        b--;
        c--;
    }
    return count;

}
console.log(findSmallest(7,3,4));