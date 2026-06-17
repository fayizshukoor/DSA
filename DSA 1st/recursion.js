    // Print 1 to n
    function print1toN(n){
        if(n===0){
            return ;
        }
        print1toN(n-1);
        console.log(n);
    }

    console.log("1 to N:");
    print1toN(10);

    // Print N to 1
    function printNto1(n){
        if(n===0){
            return ;
        }

        console.log(n);
        printNto1(n-1);
    }

    console.log("N to 1:");
    printNto1(10);

    // sum of n Numbers

    function sumOfN(n){
        if(n===0){
            return 0;
        }
        return n + sumOfN(n-1);
    }

    console.log(`Sum of N :${sumOfN(5)}`);



// Factorial 

function factorial(n){
    if(n===1){
        return 1;
    }
return factorial(n-1)*n;
    
}

console.log(factorial(5));


// Reverse array

function reverse(left, right, arr){
    if(left >= right){
        return;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    reverse(left+1, right-1, arr);
    return arr;
}
let arr = [1,2,3,4,5];
console.log("Reversed array:", reverse(0,arr.length-1, arr));


// reverse string

function reverseSring(str){
    if(str.length === 0){
        return "";
    }

    return reverseSring(str.slice(1)) + str[0];
}

console.log(reverseSring("hello"));


// check palindrome

function palindrome(left, right, str){
    if(left >= right){
        return true;
    }

    if(str[left] !== str[right]){
        return false;
    }

    return palindrome(left+1, right-1, str);
}

let str = "malayalam";

console.log(palindrome(0,str.length-1, str));

// palindrome 1 parameter
function palindrome(str){
    if(str.length <= 1){
        return true;
    }
    if(str[0] === str[str.length-1]){
       
    return palindrome(str.slice(1,str.length-1));
    }
    return false;
}

let str2 = 'maam';
console.log(palindrome(str2))


// Nth Fibonacci number

function fibonacci(n){
    if(n <=1){
        return n;
    }

    let secondLast = fibonacci(n-1);
    let last = fibonacci(n-2);
    return last + secondLast;
}


console.log(fibonacci(6));


//prime number
function prime(n, i=2){
    if(n <= 1){
        return false;
    }
    
    if(n === 2){
        return true;
    }
    
    if(i*i > n){
        return true;
    }
    
    if(n % i === 0){
        return false;
    }
    
    return prime(n, i+1);
}

console.log(prime(4))

// sum of array
function arraySum(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + arraySum(arr.slice(1));
}

console.log(arraySum([1,2,4,5]));


// sum of odd
function sumOfOdd(n){
    if(n === 0){
        return n;
    }

    if(n % 2 === 0){
        return n + sumOfOdd(n-1);
    }

    return sumOfOdd(n-1);
}

console.log(sumOfOdd(5));