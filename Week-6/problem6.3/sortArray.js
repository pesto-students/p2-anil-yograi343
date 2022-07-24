//Approach 1: Counting the number of 0s 1s 2s in the given array.
function sortArrayCount(arr){
    let cnt0=0;
    let cnt1=0;
    let cnt2=2;
    for(let i=0; i<=arr.length; i++){
        switch(arr[i]){
            case 0:
                cnt0++;//count number of zeroes
                break;
            case 1:
                cnt1++;//count number of ones
                break;
            case 2:
                cnt2++; //count number of twos
                break;
        }
    }
    i=0;
    while(cnt0>0){
        arr[i++]=0;//assigning 0s upto its count 
        cnt0--;
    }
    while(cnt1>0){
        arr[i++]=1;
        cnt1--;
    }
    while(cnt2>0){
        arr[i++]=2;
        cnt2--;
    }
    return arr;
}
arr =[1,1,0,0,0,1,1,2,2,1,0,1,0,0,2,1,0];
console.log("1st Approach: " +sortArrayCount(arr));

//Second Approach: Dutch Flag problem
function sortArray(arr){
    let low=0;
    let high=arr.length -1;
    let mid=0;
    let temp=0;
    while(mid<high){
        switch(arr[mid]){
            case 0:{
                temp=arr[mid];
                arr[mid]=arr[low];
                arr[low]=temp;
                mid++;
                low++;
                break;
            }
            case 1:{
               mid++
               break;
            }
            case 2:{
                temp=arr[mid];
                arr[mid]=arr[high];
                arr[high]=temp;
                high--;
                break;
            }
        }
    }
    return arr;
}

console.log("2nd Approach: "+sortArray(arr));