// Given an array arr{} of size N having distinct elements, the task is to 
// find the nextgreater element for each element of the array in order of their appearance in the array.
// Next greater element of an element in the array is the nearest element on the right
// which is greater than the current element. If there does not exist next greater of current element, 
// then next greater element for current element is -1. 
// For example, next greater of the last element is always -1.
// Example 1:
// Input:N = 4, arr[] = [1 3 2 4]
// Output:3 4 4 -1
// Explanation:In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1

//TimeComplexity=o(N^2) and Space complexity: O(N)
function nextGreaterElement(numsArr){
    let NGE = [], len = numsArr.length;
    for(let i=0; i<len; i++){
      let found=false;
      for(let j=i+1;j<len;j++){
        if(numsArr[i]<numsArr[j]){
            found=true;
            NGE.push(numsArr[j]);
            break;
        }
      }
      if(found===false){
        NGE.push(-1);
      }
    }
    return NGE;
  }
  
  let arr1 = [1,3,2,4];
  let arr2 = [3,6,8,0,1];
  let result = nextGreaterElement(arr2);
  console.log(result);
//Need help with keeping track of the order