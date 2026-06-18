class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(arr, low=0, high=arr.length-1){
    if(low > high){
        return null;
    }

    let mid = Math.floor((low+high)/2);

    let root = new Node(arr[mid]);

    root.left = sortedArrayToBST(arr, low, mid-1);
    root.right = sortedArrayToBST(arr, mid+1, high);

    return root;
}

let arr = [10,20,30,40,50,60,70];

let root = sortedArrayToBST(arr);



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

console.log("\nsorted array to bst:\n");
printTree(root);


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
console.log("\nbst to sorted array:\n");
console.log(bstToSortedArr(root));