class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    
    enqueue(value){
        let newNode = new Node(value);
        if(!this.rear){
            this.front = newNode;
            this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }
    
    dequeue(){
        if(!this.front){
            console.log("queue empty");
            return null;
        }
        let removedElement = this.front;
        this.front = this.front.next;
       
        if(this.front === null){
            this.rear = null;
        }
        
        this.length--;
        return removedElement.data;
    }
    
    display(){
        let current = this.front;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
        
    peek(){
            if(!this.front){
                console.log("queue empty");
                return null;
            }
            return this.front.data;
        }
    
    
    isEmpty(){
        return this.length === 0;
    }
    
    size(){
        return this.length;
    }
}

const solution = new Queue();
solution.enqueue(10);
solution.enqueue(20);
solution.enqueue(30);
solution.display();
console.log("dequeued element:",solution.dequeue());
console.log('after dequeue:');
solution.display();
console.log("size:",solution.size());