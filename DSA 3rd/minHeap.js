// class MinHeap{
//     constructor(){
//         this.heap = [];
//     }
    
//     parent(index){
//         return Math.floor((index - 1)/2);
//     }
    
//     leftChild(index){
//         return 2 * index + 1;
//     }
    
//     rightChild(index){
//         return 2 * index + 2;
//     }
    
//     swap(i,j){
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }
    
//     insert(value){
//         this.heap.push(value);
//         this.heapifyUp();
//     }
    
//     heapifyUp(){
//         let index = this.heap.length-1;
        
//         while(index > 0 && this.heap[index] < this.heap[this.parent(index)]){
//             this.swap(index, this.parent(index));
//             index = this.parent(index);
//         }
//     }
    
//     extractMin(){
//         if(this.heap.length === 0){
//             return null;
//         }
        
//         if(this.heap.length === 1){
//             return this.heap.pop();
//         }
        
//         let max = this.heap[0];
        
//         this.heap[0] = this.heap.pop();
        
//         this.heapifyDown(0);
        
//         return max;
//     }
    
//     heapifyDown(index){
//         let smallest = index;
        
//         let left = this.leftChild(index);
//         let right = this.rightChild(index);
        
//         if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
//             smallest = left;
//         }
        
//         if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
//             smallest = right;
//         }
        
//         if(smallest !== index){
//             this.swap(smallest, index);
//             this.heapifyDown(smallest);
//         }
//     }
    
//     peek(){
//         return this.heap[0];
//     }
    
//     print(){
//         console.log(this.heap);
//     }
    
// }


// const heap = new MinHeap();
// heap.insert(50);
// heap.insert(30);
// heap.insert(70);
// heap.insert(100);
// heap.insert(40);
// heap.print();
// console.log(heap.extractMin());
// console.log(heap.peek());


class MinHeap{
    
    constructor(){
        this.heap = [];
    }
    
    parent(index){
        return Math.floor((index - 1)/2);
    }
    
    leftChild(index){
        return 2 * index + 1;
    }
    
    rightChild(index){
        return 2 * index + 2;
    }
    
    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    
    
    heapifyUp(){
        let index = this.heap.length-1;
        
        while(index > 0 && this.heap[index] < this.heap[this.parent(index)]){
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }
    
    extractMin(){
        if(this.heap.length === 0){
            return null;
        }
        
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        
        let min = this.heap[0];
        
        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);
        
        return min;
    }
    
    heapifyDown(currentIndex){
        let smallest = currentIndex;
        
        let left = this.leftChild(currentIndex);
        let right = this.rightChild(currentIndex);
        
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }
        
        if(smallest !== currentIndex){
            this.swap(smallest, currentIndex);
            this.heapifyDown(smallest);
        }
    }
    
    peek(){
        return this.heap[0];
    }
    
    size(){
        return this.heap.length;
    }
}

function kthLargest(arr, k){
    let minHeap = new MinHeap();
    
    for(let value of arr){
        minHeap.insert(value);
        
        if(minHeap.size() > k){
            minHeap.extractMin();
        }
    }
    
    return minHeap.peek();
}

let arr = [7, 10, 4, 3, 20, 15];

console.log(kthLargest(arr, 3));