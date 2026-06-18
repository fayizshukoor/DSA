function mergeSort(arr, left=0, right=arr.length-1){
    if(left >= right){
        return;
    }
    
    let mid = Math.floor((left+right)/2);
    
     mergeSort(arr, left, mid);
     mergeSort(arr, mid+1, right);

     merge(arr, left, mid, right);
     return arr;
}

function merge(arr, left, mid, right){
    let temp = [];
    let i = left;
    let j = mid+1;
    while(i <= mid && j <= right){
        if(arr[i] <= arr[j]){
            temp.push(arr[i++]);
        }else{
            temp.push(arr[j++]);
        }
    }
    
    while(i<=mid){
        temp.push(arr[i++]);
    }
    
    while(j<=right){
        temp.push(arr[j++]);
    }
    
    for(let k=0; k<temp.length; k++){
        arr[left+k] = temp[k];
    }
    
}
let arr = [8,3,5,2,7,6];
console.log(mergeSort(arr));
