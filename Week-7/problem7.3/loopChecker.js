const link1={
    head:{value:2,
        next:{
            value:3,
            next:{
                value:7,
                next:head
            }
        }
    }
}

//Approach 1: Using Hashing, storing the linked list in set to avoid dupicationa 
//and if duplication is detetect then the loop is present
//Time complexity: O(N) and Space Complexity: O(N)
function hasCycle(head){
    let set = new Set();

    let current =head;
    
    while(current){
        if(set.has(current)){
            return true;
        }else{
            set.add(current);
        }
        current=current.next;
    }
    return false;
}
console.log(hasCycle(link1.head));

// Approach 2: Using Floyd's tortoise and hare Algorithm
// creating two pointers fast and slow and checking a loop if both pointer become save at any iteration.
function loopChecker(head){
    let fast=head;
    let slow=head;
    while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next;
        if(fast===slow){
            return true;
        }
    }
    return false;
}
