//Problem 6.1: Max Sum Contagious Subarray

function maxSumSubArray(arr){
    let maxSum=0;
    let curSum=0;
    for (let i =0; i<=arr.length; i++){
        curSum=curSum+arr[i];
        //checking if the current sum that we have is greater that maxSum.
        if (curSum>maxSum){
            maxSum=curSum;
        }
        if(curSum<0){
            curSum=0;
        }
    }
    return maxSum;
}

const arr=[1,2,-3,4,-10];
const arr1=[-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSumSubArray(arr));
console.log(maxSumSubArray(arr1));

module.exports=maxSumSubArray;