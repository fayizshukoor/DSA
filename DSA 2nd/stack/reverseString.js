class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    
    push(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    
    reverseString(str){
        for(let char of str){
           this.push(char);
        }
        
        
        let result = ""
        while(!this.isEmpty()){
            result += this.pop();
        }
        
        return result;
    }
    
    pop(){
        if(!this.top){
            console.log('stack empty');
            return null;
        }else{
            let poppedValue = this.top.data;
            this.top = this.top.next;
            this.size--;
            return poppedValue;
        }
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("stack empty");
            return null;
        }else{
            return this.top.data;
        }
    }
    
    isEmpty(){
        return this.top === null;
    }
    
    display(){
        let current =this.top;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const solution = new Stack();
console.log(solution.reverseString('HELLO WORLD'));