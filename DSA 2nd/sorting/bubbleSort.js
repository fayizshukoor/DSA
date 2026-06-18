function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let swapped = false;
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] =[arr[j+1], arr[j]];
                swapped = true;
            }
        }
        console.log(arr)
        if(!swapped){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2,20,5,3,10,6]));