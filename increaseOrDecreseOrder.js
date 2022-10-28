
function increseOrDecreasingOrder(a,b,c){
    if( a < b && b < c) return 'increasing order';

    else if(a > b && b > c ) return 'decrreasing order';

    else return 'neither increasing nor decreasing';
}
console.log(increseOrDecreasingOrder(1,2,2));