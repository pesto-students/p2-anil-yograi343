// O(n) time & O(1) space
class LinkedList{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1;
    }
    append(data){
        const newNode={
            value:data,
            next:null
        }
        this.tail.next = newNode;
        this.tail=newNode;
    }

    reverse(){
        let first=this.head
        this.tail=this.head;
        let second=first.next
        while(second){
            let temp=second.next;
            second.next=first;
            
            first=second;
            second=temp;
        }
        this.head.next=null;
        this.head=first;
    }
}

const myList = new LinkedList(10);
myList.append(16);
myList.append(20);
console.log(myList);
myList.reverse();
console.log(myList);






























function reverse(head) {
  let node = head,
      previous,
      tmp;

  while (node) {
    // save next before we overwrite node.next!
    tmp = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = tmp;
  }

  return previous;
}