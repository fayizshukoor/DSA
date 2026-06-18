class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class StackLL{
    constructor(){
        this.top = null;
    }
    
    push(value){
        let newNode = new Node(value);
        if(!this.top){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
    }
    
    pop(){
        if(!this.top){
            throw new Error("stack underflow");
        }
        
        let poppedNode = this.top;
        this.top = this.top.next;
        
        return poppedNode.data;
    }
    
    peek(){
        if(!this.top){
            throw new Error("stack underflow");
        }
        
        return this.top.data;
    }
    
    print(){
        if(!this.top){
            console.log('stack is empty');
            return null;
        }
        
        let current = this.top;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const stLL = new StackLL();
stLL.push(10);
stLL.push(20);
stLL.push(30);
stLL.print();
console.log('poped element:',stLL.pop());
stLL.print();