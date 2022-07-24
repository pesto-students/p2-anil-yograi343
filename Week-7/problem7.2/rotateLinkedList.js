//creating Nodes for Linked List
class Node {
    constructor(data) {
        this.value = data
        this.next = null                
    }
}
//creating a linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.length= 0;
    }

    add(value){
        const node = new Node(value);
        let current;

        if(!this.head){
            this.head=node;
        }else{
            current=this.head;

            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.length++;
    }
    print(){
        let cur=this.head;
        while(cur){
            console.log(cur.value);
            cur=cur.next;
        }
    }
    //time complexity O(N) and Space Complexity O(1)
    rotateOptimized(k){
        //edge case
        if(this.head===null || this.head.next===null|| k===0)
        return;

        //calculating length of the linked list
        let curr=this.head;
        let len=1;
        while(curr.next){
            len++;
            curr=curr.next;
        }
        //converting linked list into circular linked list
        curr.next=this.head;

        //dealing with k>length of the linked list
        k=k%len;
        k=len-k;
        //sequentially going to the kth position.
        while(k-->0)curr=curr.next;

        this.head=curr.next;
        curr.next=null;
        return this.head;
    }
}



const list = new LinkedList();

list.add(2);
list.add(7);
list.add(8);
list.add(9);
list.add(12);
list.add(4);
list.add(16);
console.log("Original linked list"); //2,7,8,9,12,4,16
list.print();
const k=3;
console.log("After rotating the linked list " +k+ " times");
list.rotateOptimized(k); //12,4,16,2,7,8,9
list.print();