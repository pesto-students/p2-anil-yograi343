// time complexity=O(N^2) and space complexity O(N)
function _3Sum(arr,target){
    let val=0;
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        map.set(arr[i],i);
    }
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            val=target-(arr[i]+arr[j]);
            if(map.has(val)){
                return true;
            }
        }
    }
    return false;
}

console.log(_3Sum([1,2,3,5,6,11,15,16,17,18],20));
