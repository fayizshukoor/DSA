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
        }
        
        else if(value > root.data){
            root.right = this.insertNode(root.right, value);
        }
        
        return root;
    }
    
    search(value){
        return this.searchNode(this.root, value);
    }
    
    searchNode(root, value){
        if(root === null){
            return false;
        }
        
        if(value === root.data){
            return true;
        }
        
        if(value < root.data){
            return this.searchNode(root.left, value);
        }else{
            return this.searchNode(root.right , value);
        }
    }
    
    delete(value){
        this.root = this.deleteNode(this.root, value);
    }
    
    deleteNode(root, value){
        if(root === null){
            return root;
        }
        
        if(value < root.data){
            root.left = this.deleteNode(root.left, value);
        }else if (value > root.data){
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
            
            root.right = this.deleteNode(root.right, minNode.data)
        }
        return root;
    }
    
    findMin(root){
        while(root.left !== null){
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
            return;
        }

        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.data);
    }
}

const bst = new BST();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("before delete:");
bst.inorder();

// bst.delete(50);

// console.log("After Delete");
// bst.inorder();

console.log(bst.search(10));
console.log("preorder:");
bst.preorder();
console.log("postorder:");
bst.postorder();



// Find closest node
function findClosest(root, target){
    let closest = root.data;
    while(root !== null){
        if(Math.abs(target - root.data) < Math.abs(target - closest)){
            closest = root.data;
        }
        
        if(target < root.data){
            root = root.left;
        }else if(target > root.data){
            root = root.right;
        }else{
            return root.data;
        }
    }
    return closest;
}

console.log("closest to 33:",findClosest(bst.root, 33));


// check whether the BST is valid
function isValidBST(root, min=-Infinity, max=Infinity){
    if(root === null){
        return true;
    }
    
    if(root.data <= min || root.data >= max){
        return false;
    }
    
    let leftValid = isValidBST(root.left, min, root.data);
    let rightValid = isValidBST(root.right, root.data, max);
    
    return leftValid && rightValid;
}

console.log(isValidBST(bst.root))


// lowest common ancestor of two node
function LCA(root, p, q){
    if(root === null){
        return null;
    }
    
    if(p < root.data && q < root.data){
        return LCA(root.left, p, q);
    }
    
    if(p > root.data && q > root.data){
        return LCA(root.right, p, q);
    }
    
    return root;
}

console.log("LCA of 20,40:",LCA(bst.root, 20, 40).data);

function kthSmallest(root, k){
    let result = null;
    let count = 0;
    
    function inorder(root){
        if(root === null || result !== null){
            return;
        }
        
        inorder(root.left);
        
        count++;
        if(count === k){
            result = root.data;
            return;
        }
        
        inorder(root.right);
    }
    
    inorder(root);
    
    return result;
}


console.log("kth smallest:",kthSmallest(bst.root,2));


function kthLargest(root, k){
    let result = null;
    let count = 0;
    
    function reverseInorder(root){
        if(root === null || result !== null){
            return;
        }
        
        reverseInorder(root.right);
        
        count++;
        if(count === k){
            result = root.data;
            return;
        }
        
        reverseInorder(root.left);
    }
    
    reverseInorder(root);
    
    return result;
}

console.log("kth largest:", kthLargest(bst.root, 1));


function countLeafNodes(root){
    if(root === null){
        return 0;
    }
    
    if(!root.left && !root.right){
        return 1;
    }
    
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

console.log('no of leaf nodes:', countLeafNodes(bst.root));


function printTree(node, space = 0, gap = 5){

    if(node === null){
        return;
    }

    // Print right subtree first
    printTree(node.right, space + gap);

    // Print current node
    console.log(" ".repeat(space) + node.data);

    // Print left subtree
    printTree(node.left, space + gap);
}

console.log("\nprinted tree:\n");
printTree(bst.root);



function sumOfNodes(root){
    if(root === null){
        return 0;
    }
    
    return root.data + sumOfNodes(root.left) + sumOfNodes(root.right);
}

console.log("sum of nodes:",sumOfNodes(bst.root));


function height(root){
    if(!root){
        return 0;
    }
    
    return 1 + Math.max(height(root.left), height(root.right));
}

console.log("height of tree:",height(bst.root));

function findDepth(root, target, depth=0){
    if(root.data === target){
        return depth;
    }
    
    if(target < root.data){
        return findDepth(root.left, target, depth+1);
    }
    
    return findDepth(root.right, target, depth+1);
}

console.log('depth of 20:',findDepth(bst.root, 20));

function isBalanced(root){
    function height(node){
        if(!node){
            return 0;
        }
        
        let left = height(node.left);
        if(left === -1){
            return -1;
        }
        let right = height(node.right);
        if(right === -1){
            return -1;
        }
        
        if(Math.abs(left - right) > 1){
            return -1;
        }
        
        return Math.max(left, right) + 1;
    }
    
    return height(root) !== -1;
}

console.log("is Balanced:", isBalanced(bst.root));

function isFullBT(root){
    if(!root){
        return true;
    }
    
    if(!root.left && !root.right){
        return true;
    }
    
    if(root.left && root.right){
        return isFullBT(root.left) && isFullBT(root.right);
    }
    
    return false;
}

console.log("is full binary tree:",isFullBT(bst.root));

function isCompleteBT(root){
    if(!root){
        return true;
    }
    
    let queue = [];
    queue.push(root);
    let seenNull=false;
    
    while(queue.length > 0){
        let current = queue.shift();
        if(!current){
            seenNull = true;
        }else{
            if(seenNull){
                return false;
            }
            
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    return true;
    
}

console.log("Is complete Binary tree:", isCompleteBT(bst.root));