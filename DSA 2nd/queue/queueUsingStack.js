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
       
       console.log('front ->',result.join(" "));
   }
}

const qs = new QueueUsingStack();

qs.enqueue(10);
qs.enqueue(20);
qs.enqueue(30);

console.log(qs.dequeue());
// qs.enqueue(40);
console.log('after deque');
qs.print();