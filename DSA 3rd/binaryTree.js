

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(8);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(9);
root.right.right.right = new Node(10);

console.log(root);

function inorder(node){
    if(node === null){
        return;
    }    
    
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
}

function preorder(node){
    if(node === null){
        return;
    }
    console.log(node.data);
    preorder(node.left);
    preorder(node.right);
}

function postorder(node){
    if(node === null){
        return;
    }
    
    postorder(node.left);
    postorder(node.right);
    console.log(node.data);
}

function levelorder(node){
    let queue = [];
    queue.push(node);
    
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current.data);
    
        if(current.left){
            queue.push(current.left);
        }
        
        if(current.right){
            queue.push(current.right);
        }
    }
    
}

levelorder(root);