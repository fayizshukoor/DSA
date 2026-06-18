function dailyTemperatures(arr){
    let stack = [];
    let result = new Array(arr.length).fill(0);
    
    for(let i=0; i<arr.length; i++){
        while(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
            let index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
}

let arr = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(arr));