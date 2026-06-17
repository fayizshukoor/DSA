class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{

    arrayToLL(arr){
        let head = new Node(arr[0]);
        let mover = head;

        for(let i=1; i<arr.length; i++){
            let temp = new Node(arr[i]);
            mover.next = temp;
            mover = temp;
        }

        return head;
    }


    lengthOfLL(head){
        let temp = head;
        let count = 0;

        while(temp !== null){
            count++;
            temp = temp.next;
        }
        console.log("count: ",count);
    }

    checkIfPresent(head, value){
        let temp = head;

        while(temp !== null){
            if(temp.data === value){
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    deleteHead(head){

        if(head === null){
            return head;
        }
        head = head.next;
        return head;
    }

    deleteTail(head){
        if(head === null || head.next === null){
            return null;
        }
        let temp = head;

        while(temp.next.next !== null){
            temp = temp.next;
        }

        temp.next = null;

        return head;
    }

    deleteKth(head, k){
        if(head === null){
            return head;
        }

        if(k===1){
            head = head.next;
            return head;
        }

        

        let temp = head;
        let count = 0, prev=null;
        while(temp !== null){
            count++;
            if(count === k){
                prev.next = temp.next;
                return head;
            }
            prev = temp;
            temp = temp.next;
            
            
        }
        return head;
    }

    deleteElement(head, element){
        if(head === null){
            return head;
        }

        if(head.data === element){
            head = head.next;
            return head;
        }

        let temp = head;
        let  prev=null;
        while(temp !== null){
            if(temp.data === element){
                prev.next = temp.next;
                return head;
            }
            prev = temp;
            temp = temp.next;
            
            
        }
        return head;
    }

    insertAtHead(head, element){
        head = new Node(element, head);
        return head;
    }

    insertAtTail(head, element){
        if(head === null){
            return head = new Node(element);
        }

        let temp = head;
        while(temp.next !== null){
            temp = temp.next;
        }
        temp.next = new Node(element);
        return head;
    }

    insertAtKth(head, k, element){
        if(head === null){
            if(k===1){
                return new Node(element);
            }else{
                return null;
            }
        }

        if(k === 1){
            return new Node(element, head);
        }

        let temp = head, count = 0;
        while(temp !== null){
            count++;
            if(count === k-1){
                let newNode = new Node(element,temp.next);
                temp.next = newNode;
                return head;
            }
            temp = temp.next;
        }

        return head;
    }

    insertBeforeElement(head,element,value){
        if(head === null){
            return null;
        }

        if(head.data === element){
            head = new Node(value,head);
            return head;
        }

        let temp = head;
        while(temp.next !== null){
            if(temp.next.data === element){
                let newNode= new Node(value,temp.next);
                temp.next = newNode;
                return head;
            }
            temp = temp.next;
        }
        return head;
    }

    traverse(head){

        let temp = head;
        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let solution = new LinkedList();

let arr = [1,2,3,4,5,6,7,8,9];
let head = solution.arrayToLL(arr);

console.log("head:",head.data);

solution.traverse(head);

solution.lengthOfLL(head);

console.log("checkStatus:",solution.checkIfPresent(head, 8));

head = solution.deleteHead(head);

console.log("after deleting head:");
solution.traverse(head);

head = solution.deleteTail(head);

console.log("after deleting tail:");
solution.traverse(head);

 head = solution.deleteKth(head, 2);

console.log("after deleting kth:");
solution.traverse(head);

head = solution.deleteElement(head, 5);

console.log("after deleting element:");
solution.traverse(head);

head = solution.insertAtHead(head, 10);

console.log("after insertion at head:");
solution.traverse(head);

head = solution.insertAtTail(head, 11);

console.log("after insertion at tail:");
solution.traverse(head);

head = solution.insertAtKth(head, 5, 15);

console.log("after insertion at kth:");
solution.traverse(head);

head = solution.insertBeforeElement(head, 8, 20);

console.log("after insertion before an element:");
solution.traverse(head);