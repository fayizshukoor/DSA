class Node{
    constructor(data, next=null, prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;

    }
}

class DoubleLinkedList{

    arrayToDLL(arr){
        let head = new Node(arr[0]);
        let prev = head;
        for(let i=1; i<arr.length; i++){
            let temp = new Node(arr[i],null,prev);
            prev.next = temp;
            prev = temp;
        }

        return head;
    }

    deleteHead(head){

        if(head === null || head.next === null){
            return null;
        }

        let temp = head;
        head = head.next;
        head.prev = null;
        temp.next = null;
        return head;
    }

    deleteTail(head){
        if(head === null || head.next === null){
            return null;
        }

        let temp = head;
        while(temp.next !== null){
            temp = temp.next;
        }
        let newTail = temp.prev;
        temp.prev = null;
        newTail.next = null;
        return head;
    }

    deleteKth(head, k){
        if(head === null){
            return null;
        }
        

        let temp = head,count=0;
        while(temp !== null){
            count++;
            if(count === k){
                break;
            }
            temp = temp.next;
        }

        if(temp === null){
            return head;
        }

        if(temp.prev === null && temp.next === null){
            return null;
        }else if(temp.prev === null){
            return this.deleteHead(head);
        }else if(temp.next === null){
            this.deleteTail(head);
            return head;
        }

            let back = temp.prev;
            let front = temp.next;
            back.next = temp.next;
            front.prev = temp.prev;
            temp.next = null;
            temp.prev = null;
        
        return head;
    }

    deleteElement(head,element){
        if(head === null){
            return null;
        }

        let temp = head;
        while(temp !== null){
            if(temp.data === element){
                break;
            }

            temp = temp.next;
        }

        if(temp === null){
            return null;
        }

        if(temp.prev === null){
            return this.deleteHead(head);
        }else if(temp.next === null){
            this.deleteTail(head);
            return head;
        }
                let back = temp.prev;
                let front = temp.next;

                back.next = front;
                front.prev = back;
                temp.next = null;
                temp.prev = null;

                return head;
    }

    deleteNode(node){
        let back = node.prev;
        let front = node.next;

        if(front === null){
            back.next = null;
            node.prev = null;
            return head;
        }else{
            back.next = front;
            front.prev = back;
            node.next = null;
            node.prev = null;
            return head;
        }
    }


    insertBeforeHead(head,element){
        let newHead = new Node(element,head,null);
        head.prev = newHead;
        return newHead;
    }

    insertBeforeTail(head, element){
        if(head.next === null){
            let newNode = new Node(element,head,null);
            head.prev = newNode;
            head = newNode;
            return head;
        }

        let temp = head;
        while(temp.next !== null){
            temp = temp.next;
        }

        let back = temp.prev;

        let newNode = new Node(element,temp,back);
        back.next = newNode;
        temp.prev = newNode;
        
        return head;
    }


    insertBeforeKth(head, element, k){

        let temp = head,count=0;

        

        while(temp !== null){
            count++;
            if(count === k){
                break;
            }
            temp = temp.next;
        }

        if(temp === null){
            return null;
        }

        if(k === 1){
            let newNode = new Node(element,head,null);
            head.prev = newNode;
            return newNode;
        }

        if(temp.next === null){
            let back = temp.prev;
            
            let newNode = new Node(element,temp,back);
            back.next = newNode;
            temp.prev = newNode;

            return head;
        }else{
            let back = temp.prev;

            let newNode = new Node(element, temp, back);
            back.next = newNode;
            temp.prev = newNode;

            return head;
        }
    }

    insertBeforeNode(head, node, value){
        let back = node.prev;
        
        let newNode = new Node(value,node,back);
        back.next = newNode;
        node.prev = newNode;

        return head;
    }

    reverseDLL(head){
        let stack = [];
        let temp = head;

        while(temp !== null){
            stack.push(temp.data);
            temp = temp.next;
        }


        temp = head;

        while(temp !== null){

            temp.data = stack.pop();
            temp = temp.next;
        }

        return head;
    }

    reverseDLLGood(head){
        let temp = head, back=null;
        while(temp !== null){
            back = temp.prev;
            temp.prev = temp.next;
            temp.next = back;
            temp = temp.prev;
        }

        return back.prev;
    }

    removeMiddle(head){

        if(!head || !head.next ){
            return null;
        }

        let slow = head;
        let fast = head;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        let back = slow.prev;
        let front = slow.next;
         if(back)
            back.next = front;
        if(front)
            front.prev = back;

        return head;
    }

    traverse(head){

        let temp = head;
        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    reverseTraverse(head){
        if(head === null){
            return null;
        }

        let temp = head;
        while(temp.next !== null){
            temp = temp.next;
        }

        while(temp !== null){
            console.log(temp.data);
            temp = temp.prev;
        }

    }
}


let solution = new DoubleLinkedList();

let arr = [1,2,3,4,5,6,7,8];

console.log("double linked list:");
let head = solution.arrayToDLL(arr);
solution.traverse(head);

console.log("after deleting head:");
head = solution.deleteHead(head);
solution.traverse(head);

console.log("after deleting tail:");
head = solution.deleteTail(head);
solution.traverse(head);

console.log("after deleting kth:");
head = solution.deleteKth(head,3);
solution.traverse(head);

console.log("after deleting element:");
head = solution.deleteElement(head,7);
solution.traverse(head);

console.log("after deleting a node:");
head = solution.deleteNode(head.next);
head = solution.deleteNode(head.next);
solution.traverse(head);

console.log("after insert before head:");
head = solution.insertBeforeHead(head, 30);
solution.traverse(head);

console.log("after insert before tail:");
head = solution.insertBeforeTail(head, 40);
solution.traverse(head);

console.log("after insert before kth:");
head = solution.insertBeforeKth(head, 50, 1);
solution.traverse(head);

console.log("after insert before a Node:");
head = solution.insertBeforeNode(head, head.next.next.next, 60);
solution.traverse(head);

console.log("after reversing:");
head = solution.reverseDLL(head);
solution.traverse(head);

console.log("after reversing efficiently:");
head = solution.reverseDLLGood(head);
solution.traverse(head);

// console.log("reverse traverse:");
// solution.reverseTraverse(head);

console.log("after removing middle:");
head = solution.removeMiddle(head);

solution.traverse(head);