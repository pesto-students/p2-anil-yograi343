//Problem 6.5: Pair with given difference

//Approach 1st with Time Complexity: O(n^2) and Space Complexity: O(1)
function findPair1(arr,ele){
    for(let i=0; i<arr.length; i++){ //this for loop is to traverse along the array
        let sum=ele+arr[i];
        for(let j=0; j<arr.length; j++){ //this for loop to evaluate if the sum of the element
            if(sum===arr[j]){
                return 1;
            } 
        }
    }
    return 0;
}
console.log("Approach 1")
console.log("When there are no pair with same difference: "+findPair1([1,50,10,15,-23,80,54],-7));
console.log("When there is pair with same difference: "+findPair1([51,50,10,-15,23,-80,54],-1));

//Approach 2
function findPair2(arr, n) {
    let map = new Map();
    let size=arr.length-1;
   
    // Traverse the array
    for (let i = 0; i < size; i++) {
   
      // Update frequency
      // of arr[i]
      if (map.has(arr[i]))
        map.set(arr[i], map.get(arr[i]) + 1);
      else
        map.set(arr[i], 1)
   
      // Check if any element whose frequency
      // is greater than 1 exist or not for n == 0
      if (n == 0 && map.get(arr[i]) > 1)
        return true;
    }
    // Check if difference is zero and
    // we are unable to find any duplicate or
    // element whose frequency is greater than 1
    // then no such pair found.
    if (n == 0)
     return false;

    for (let i = 0; i < size; i++) {
        if (map.has(n + arr[i])) {
         return true;
        }
    }
    return false;
}
   
console.log("Approach 2")
console.log("When there are no pair with same difference: "+findPair2([1,50,14,15,-23,80,54],40));
console.log("When there is pair with same difference: "+findPair2([50,51,10,-15,23,-80,54],1));


