function maxProfit(price,start,end){
    if(end <= start){
        return 0;
    }
    let profit = 0;
    for(let i=0;i<end;i++){
        for(let j= i + 1;j <= end;j++){
          if(price[j] > price[i]){
            let curr = price[j] - price[i] + maxProfit(price,start,i-1) + maxProfit(start,j+1,end);

            profit= Math.max(profit,curr);
          }

        }
    }
return profit;

    
}
let price = [ 100, 280, 360, 410,
    50, 535, 695 ];
let n = price.length;

console.log(maxProfit(price, 0, n - 1));
