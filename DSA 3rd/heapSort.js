class HeapSort{
    
    swap(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    heapify(arr, n, currentIndex){
        let largest = currentIndex;
        
        let left = 2 * currentIndex + 1;
        let right = 2 * currentIndex + 2;
        
        if(left < n && arr[left] > arr[largest]){
            largest = left;
        }
        
        if(right < n && arr[right] > arr[largest]){
            largest = right;
        }
        
        if(currentIndex !== largest){
            this.swap(arr, currentIndex, largest);
            this.heapify(arr, n, largest);
        }
    }
    
    sort(arr){
        let n = arr.length;
        for(let i=Math.floor((n/2)-1); i >= 0; i--){
            this.heapify(arr, n, i);
        }
        
        for(let i=n-1; i > 0; i--){
            this.swap(arr, 0, i);
            
            this.heapify(arr, i, 0);
        }

        return arr;
    }
}



class HeapSortDescending{
    swap(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    heapify(arr, n, currentIndex){
        let smallest = currentIndex;
        
        let left = 2 * currentIndex + 1;
        let right = 2 * currentIndex + 2;
        
        if(left < n && arr[left] < arr[smallest]){
            smallest = left;
        }
        
        if(right < n && arr[right] < arr[smallest]){
            smallest = right;
        }
        
        if(currentIndex !== smallest){
            this.swap(arr, currentIndex, smallest);
            this.heapify(arr, n, smallest);
        }
    }
    
    sort(arr){
        let n = arr.length;
        for(let i=Math.floor((n/2)-1); i >=0; i--){
            this.heapify(arr, n, i);
        }
        
        for(let i=n-1; i>0; i--){
            this.swap(arr, 0, i);
            this.heapify(arr, i, 0);
        }
        
        return arr;
    }
}

const hs = new HeapSort();
const hsd = new HeapSortDescending();

let arr = [40,10,70,20,60];

console.log("Ascending : ",hs.sort(arr));
console.log("Descending: ",hsd.sort(arr));