//Problem 6.4 Best time to buy and sell stock

// finding the best day to buy and sell stock to get maximum profit
//1st Approach
function buySell(arr){
    let maxValue=0;
    let buy=arr.length; //willstore the day in which stocks bought
    let sell=0;         //willstore the day in which stocks were sold
    let maxProfit=0;
    for(let i=arr.lenght;i>=0;i--){
        if(maxValue<arr[i]){
            buy=i;
            maxValue=arr[i];
        }
    }
    if(buy===0){
        return "Don't buy";
    }else{
        for(let j=0; j<buy; j++){
            let profit=maxValue-arr[j];
            maxProfit=Math.max(maxProfit,profit);
        }
    }
    return maxProfit;
}
//opitmized version
function optimizedBuySell(arr){
    let minSofar=0;
    let maxProfit=0;
    for(let i=0; i<arr.length; i++){
        minSofar=Math.min(minSofar,arr[i]);
        profit=arr[i]-minSofar;
        maxProfit=Math.max(maxProfit,profit);
    }
    return maxProfit;
}

const stocks=[3,1,4,8,7,2,5];

console.log("Max profit using 1st approach: "+buySell(stocks));
console.log("Max profit using 2nd approach: "+optimizedBuySell(stocks));


