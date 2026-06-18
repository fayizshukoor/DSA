function nextGreater(arr){
    let stack = [];
    let result = new Array(arr.length).fill(-1);
    for(let i=0; i<arr.length; i++){
        while(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
            let index = stack.pop();
            result[index] = arr[i];
        }
        
        stack.push(i);
    }
    return result;
}

let arr = [2,1,2,4,3];
console.log(nextGreater(arr));