class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{

    array2LL(arr){
        let head = new Node(arr[0]);
        let mover = head;
        for(let i=1; i<arr.length; i++){
            let newNode = new Node(arr[i]);
            mover.next = newNode;
            mover = newNode;
        }
        return head;
    }

    reverse(head){
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

    reverseOptimal(head){
        let temp = head, prev = null, front;
        while(temp !== null){
            front = temp.next;
            temp.next = prev;
            prev = temp;
            temp = front;
        }
        return prev;
    }

    reverseRecursive(head){
        if(head === null || head.next === null){
            return head;
        }

        let newHead = this.reverseRecursive(head.next);
        let front = head.next;
        head.next = null;
        front.next = head;
        return newHead;
    }

    reverseBetween(head, left, right){
        let dummy = new ListNode(0,head);
        let leftStart = dummy;

        for(let i=0; i<left-1; i++){
            leftStart = leftStart.next;
        }

        let curr = leftStart.next;

        for(let i=0; i<right-left; i++){
        let nextNode = curr.next;
        curr.next = nextNode.next;
        nextNode.next = leftStart.next;
        leftStart.next = nextNode;
        }
        
        return dummy.next;
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

let arr = [10,20,30,40];

let head = solution.array2LL(arr);

console.log("linked list:");
solution.traverse(head);

// console.log("after reverse:");
// head = solution.reverse(head);
// solution.traverse(head);

// console.log("after reverse optimal:");
// head = solution.reverseOptimal(head);
// solution.traverse(head);

console.log("after reverse recursive:");
head = solution.reverseRecursive(head);
solution.traverse(head);


