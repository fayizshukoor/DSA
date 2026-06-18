class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    inorder(root = this.root){
        if(root === null){
            return;
        }

        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }

    preorder(root = this.root){
        if(root === null){
            return;
        }

        console.log(root.data);
        this.preorder(root.left);
        this.preorder(root.right);
    }

    postorder(root = this.root){
        if(root === null){
            return null;
        }

        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.data);
    }

    levelorder(){
        if(this.root === null){
            return;
        }

        let queue = [];
        queue.push(this.root);

        while(queue.length > 0){
            let current = queue.shift();
            console.log(current.data);

            if(current.left){
                queue.push(current.left);
            }

            if(current.right){
                queue.push(current.right);
            }
        }

    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.right.right = new Node(5);

tree.levelorder();