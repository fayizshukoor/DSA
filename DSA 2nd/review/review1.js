let arr = [3,2,4,5,6,1];
function partition(arr,low,high){
    let pivot = arr[high];
    let i=low-1;
    
    for(let j=low; j<arr.length; j++){
        if(arr[j] < pivot){
            i++;
            [arr[j],arr[i]] = [arr[i],arr[j]];
        }
    }
    
    [arr[i+1],arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}

function quickSort(arr, low=0, high=arr.length-1){
    if(low < high){
        let pivot = partition(arr,low,high);
        quickSort(arr,low,pivot-1);
        quickSort(arr,pivot+1, high);
    }
    return arr;
}

console.log(quickSort(arr));