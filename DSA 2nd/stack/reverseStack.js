
class Stack{
    constructor(){
        this.items = [];
    }
    
    push(value){
        this.items.push(value);
    }
    
    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.items.pop();
    }
    
    display(){
        for(let i=this.items.length-1; i>=0; i--){
            console.log(this.items[i]);
        }
    }
    
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1];
    }
    
    isEmpty(){
        return this.items.length === 0;
    }
    
    clear(){
        this.items = [];
    }
    
    reverseStack(){
        let tempStack = new Stack();
        while(!this.isEmpty()){
            tempStack.push(this.pop());
        }
        return tempStack;
    }
    
   
}

const solution = new Stack();
solution.push(10);
solution.push(20);
solution.push(30);
let reversed = solution.reverseStack();
reversed.display();
