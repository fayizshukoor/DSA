let a='leetcode';

function secNonRepeatingElement(str){
    let hashMap = {};

    for(let i=0; i<a.length; i++){
        if(!hashMap[a[i]]){
            hashMap[a[i]] = 1;
        }else{
             hashMap[a[i]] += 1;
        }
    }
    
     let count = 0;

    for(let i=0; i<a.length; i++){
        if(hashMap[a[i]] === 1){
            count++;
        }
        
        
        if(count === 2){
            return a[i];
        }
    }
}

console.log(secNonRepeatingElement(a));

function secNonRep(str){
    let freq = new Map();
    
    for(let char of str){
        freq.set(char, (freq.get(char) || 0) + 1);
    }
    
    let nonRepeat = 0;
    for(let [char, value] of freq){
        if(value === 1){
            nonRepeat++;
        }
        
        if(nonRepeat === 2){
            return char;
        }
    }
    
    return freq;
}

console.log(secNonRep('leetcode'));



class QueueUsingStack{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(value){
        this.stack1.push(value);
    }
    
    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    
    print(){
        let result = [];
        
        for(let i=this.stack2.length-1; i>=0; i--){
            result.push(this.stack2[i]);
        }
        for(let i=0; i<this.stack1.length; i++){
            result.push(this.stack1[i]);
        }
        console.log('front->', result.join(" "));
    }
}

const qs = new QueueUsingStack();
qs.enqueue(10);
qs.enqueue(20);
qs.enqueue(30);
console.log(qs.dequeue());
qs.enqueue(40);
console.log(qs.dequeue());
qs.print();


// 3rd question stack reversing without extra stack

let arr = [2,3,5,4,2,7];

function reverseStack(stack){
    if(stack.length === 0){
        return;
    }
    
    const top = stack.pop();
    
    reverseStack(stack);
    
    insertAtBottom(stack, top);
}

function insertAtBottom(stack, item){
    if(stack.length === 0){
        stack.push(item);
        return;
    }
    
    const top = stack.pop();
    
    insertAtBottom(stack, item);
    
    stack.push(top);
}

reverseStack(arr);
console.log(arr);