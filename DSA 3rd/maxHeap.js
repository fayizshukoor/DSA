class MaxHeap{
    constructor(){
        this.heap = [];
    }

    parent(index){
        return Math.floor((index)-1/2);
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
        let index = this.heap.length - 1;

        while(index > 0 && this.heap[index] > this.heap[this.parent(index)]){
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    extractMax(){
        if(this.heap.length === 0){
            return null;
        }

        if(this.heap.length === 1){
            return this.heap.pop();
        }

        let max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index){
        let largest = index;

        let left = this.leftChild(index);
        let right = this.rightChild(index);

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left;
        }

        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right;
        }

        if(index !== largest){
            this.swap(index, largest);

            this.heapifyDown(largest);
        }
    }

    peek(){
        return this.heap[0];
    }

    print(){
        console.log(this.heap);
    }
}

const heap = new MaxHeap();

heap.insert(50);
heap.insert(30);
heap.insert(70);
heap.insert(100);
heap.insert(40);

heap.print();