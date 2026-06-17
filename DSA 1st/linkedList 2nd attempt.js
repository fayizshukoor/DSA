class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    insertUnique(head, value){
        if(head === null){
            return new Node(value);
        }

        let temp = head;
        while(true){
            if(temp.data === value){
                return head;
            }
            
            if(temp.next === null){
                temp.next = new Node(value);
                return head;
            }

            temp = temp.next;
        }
    }

    insertAtSortedPosition(head, value){
        if(head === null || head.data > value){
            return new Node(value, head);
        }

        let temp = head;
        while(temp != null){
            if(temp.data === value){
                return head;
            }
            
            if(temp.next === null || temp.next.data > value){
                let front = temp.next;
                temp.next = new Node(value,front);
                return head;
            }

            temp = temp.next;
        }
    }

    // without set
    removeDuplicate(head){
        
        let temp = head.next;
        let prev = head;
        let isDuplicate, runner;
        while(temp !== null){
            runner = head;
            isDuplicate = false;
            while(runner !== temp){
            if(runner.data === temp.data){
                isDuplicate = true;
                break;
            }
            runner = runner.next;
        }
        
        if(isDuplicate){
            prev.next = temp.next;
        }else{
            prev = temp;
        }
        temp = temp.next;
        }
        return head;
        
    }

    // using set
    removeDuplicates(head){
        let set = new Set();
        
        let temp = head, prev= null;
    
        while(temp !== null){
            if(!set.has(temp.data)){
                set.add(temp.data);
                prev = temp;

            }else{
                prev.next = temp.next;
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
let head = null;
head = solution.insertUnique(head, 10);
head = solution.insertUnique(head, 10);
head = solution.insertUnique(head, 20);
head = solution.insertUnique(head, 30);
head = solution.insertAtSortedPosition(head, 5);
head = solution.insertAtSortedPosition(head, 15);

solution.traverse(head);