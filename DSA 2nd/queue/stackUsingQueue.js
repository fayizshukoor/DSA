class StackUsingQueue{
    constructor(){
        this.queue = [];
    }
    
    push(value){
        this.queue.push(value);
        for(let i=0; i<this.queue.length-1; i++){
            this.queue.push(this.queue.shift());
        }
    }
    
    pop(){
        return this.queue.shift();
    }
    
    print(){
        let result = [];
        for(let i=0; i<=this.queue.length; i++){
            result.push(this.queue[i]);
        }
        console.log("top->",result.join(" "));
    }
    
}

const sq = new StackUsingQueue();
sq.push(10);
sq.push(20);
sq.push(30);

console.log(sq.pop());
sq.print();