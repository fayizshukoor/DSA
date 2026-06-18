// question 2

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        this.root = this.insertNode(this.root, value);
    }
    
    insertNode(root, value){
        if(root === null){
            return new Node(value);
        }
        
        if(value < root.data){
            root.left = this.insertNode(root.left, value);
        }else if(value > root.data){
            root.right = this.insertNode(root.right, value);
        }
        
        return root;
    }
    
    delete(value){
        this.root = this.deleteNode(this.root, value);
    }
    
    deleteNode(root, value){
        
        if(root === null){
            return null;
        }
        if(value < root.data){
            root.left = this.deleteNode(root.left, value);
        }else if(value > root.data){
            root.right = this.deleteNode(root.right, value);
        }else{
            
            if(!root.left && !root.right){
                return null;
            }
            
            if(!root.left){
                return root.right;
            }
            
            if(!root.right){
                return root.left;
            }
            
            let minNode = this.findMin(root.right);
            root.data = minNode.data;
            root.right = this.deleteNode(root.right, minNode.data);
        }
        return root;
    }
    
    findMin(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
    
    inorder(root = this.root){
        if(root === null){
            return;
        }
        
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }
}

let bst = new BST();
bst.insert(30);
bst.insert(50);
bst.insert(70);
bst.insert(40);
bst.insert(20);
bst.inorder();
bst.delete(50);
console.log("after deletion:");
bst.inorder();
console.log(JSON.stringify(bst,null,2));