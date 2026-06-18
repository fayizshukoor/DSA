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
        this.root = this.insertValue(this.root, value);
    }

    insertValue(root, value){
        if(root === null){
            return new Node(value);
        }

        if(value < root.data){
            root.left = this.insertValue(root.left, value);
        }

        else if(value > root.data){
            root.right = this.insertValue(root.right, value);
        }

        return root;
    }

    inorder(root = this.root){
        if(root === null){
            return null;
        }

        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }
}

let bst = new BST();


let arr = [20,50,30,70,40];

for(let value of arr){
    bst.insert(value);
}
function bstToSortedArr(root){
    let result = [];
    function inorder(root){
        if(root === null){
            return null;
        }
        
        inorder(root.left);
        result.push(root.data);
        inorder(root.right);
    }
    inorder(root);
    return result;
}

bst.inorder();

console.log('bst to sorted array:',bstToSortedArr(bst.root));