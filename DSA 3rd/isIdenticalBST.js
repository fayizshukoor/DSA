class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isIdentical(root1, root2){
    if(root1 === null && root2 === null){
        return true;
    }
    
    if(root1 === null || root2 === null){
        return false;
    }
    
    if(root1.data !== root2.data){
        return false;
    }
    
    return isIdentical(root1.left, root2.left) && isIdentical(root1.right, root2.right)
}

let root1 = new Node(1);
root1.left = new Node(4);
root1.right = new Node(5);


let root2 = new Node(1);
root2.left = new Node(4);
root2.right = new Node(5);

console.log(isIdentical(root1, root2));