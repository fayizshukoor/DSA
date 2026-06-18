class Deque{
    constructor(){
        this.queue = [];
    }
    
    addRear(value){
        this.queue.push(value);
    }
    
    removeFront(){
        return this.queue.shift();
    }
    
    addFront(value){
        this.queue.unshift(value);
    }
    
    removeRear(){
        return this.queue.pop();
    }
}

const dq = new Deque();