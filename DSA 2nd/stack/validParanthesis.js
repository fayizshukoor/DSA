function isValid(str){
    let stack = [];
    let map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    for(let char of str){
        if(char=== '(' || char === '[' || char === '{'){
            stack.push(char);
        }else if(char === ')' || char === ']' || char === '}'){
            if(stack.length === 0){
                return false;
            }
            
            let top = stack.pop();
            
            if(top !== map[char]){
                    return false;
                }
        }else{
            return false;
        }
        }
    
    return stack.length === 0;
}

let word = '{[]{}}';
console.log(isValid(word));