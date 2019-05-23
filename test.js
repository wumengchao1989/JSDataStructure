/*function findTwoSum(target, arr) {
    let twoSums = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                twoSums.push([arr[i], arr[j]])
            }
        }
    }
    console.log(twoSums);
    return twoSums;
}

findTwoSum(1, [0, 1, 2, -1, -4, 4, 2, 1, 2, 3, 4, 1, 1, 2, 3, 2, 1]);*/


function findMin(x, arr) {
    if(arr.indexOf(x)>-1)return 1;
    let min=10000;
    for (let i = 0; i < arr.length; i++) {
        if(x-arr[i]>0){
            let cal=findMin(x - arr[i],arr) + 1;
            if(cal<min){
                min=cal
            }
        }
    }
    return min
}

var coinChange=function(coins,amount){
    let dp=new Array(amount+1);
    dp.fill(Number.MAX_VALUE);
    dp[0]=0;
    for(let i=1;i<=amount;i++){
        for(let j=0;j<coins.length;j++){
            if(i-coins[j]){
                dp[i]=Math.min(dp[i-coins[j]]+1,dp[i])
            }

        }
    }
    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}