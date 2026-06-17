class Node{
    constructor(data, next=null, prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0;
    }
    insertArr(arr){
        for(let i=0; i<arr.length; i++){
            let newNode = new Node(arr[i]);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.size++;
        }
    }
    
    reverse(){
        let current = this.head;
        let prevNode = null;
        [this.head, this.tail] = [this.tail, this.head];
        while(current){
            let nextNode = current.next;
            current.next = prevNode;
            current.prev = nextNode;
            prevNode = current;
            current = nextNode;
        }
    }
    
    removeKthFromEnd(k){
        let current = this.tail;
        let count = 1;
        while(current && count < k){
                current = current.prev;
                count++;
            }
        
        if(!current){
            return;
        }
        
        if(current === this.head){
            this.head = this.head.next;
        }
        if(current === this.tail){
            this.tail = this.tail.prev;
        }
        
        if(current.prev){
            current.prev.next = current.next;
        }
        
        if(current.next){
            current.next.prev = current.prev;
        }
        
        current.next = null;
        current.prev = null;
    }
    
    isCircular(){
        if(!this.head || !this.head.next){
            return false;
        }
        
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
            
            if(fast === slow){
                return true;
            }
        }
        return false;
        
    }
    
    printReverse(){
        let current = this.tail;
        while(current){
            console.log(current.data);
            current = current.prev;
        }
    }
    
    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
        
    }
}

const solution = new DoubleLinkedList();
solution.insertArr([2,3,4,5,6,7]);
solution.print();
console.log("reversed:");
solution.reverse();
solution.print();
solution.removeKthFromEnd(3);
console.log("after removing kth from end");
solution.print();
// console.log("reverse print:");
// solution.printReverse();
