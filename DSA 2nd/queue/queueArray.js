class Queue{
    constructor(){
        this.items = [];
    }
    
    enqueue(value){
        this.items.push(value);
    }
    
    dequeue(){
        if(this.isEmpty()){
            console.log("queue empty");
            return null;
        }
        return this.items.shift();
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("queue empty");
            return null;
        }
        return this.items[0];
    }
    
    isEmpty(){
        return this.items.length === 0;
    }
    
    size(){
        return this.items.length;
    }
    
    display(){
        for(let i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

const solution = new Queue();
solution.enqueue(10);
solution.enqueue(20);
solution.enqueue(30);
solution.display();
console.log("after dequeue:");
solution.dequeue();
solution.display();
