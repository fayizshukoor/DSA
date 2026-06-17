// Binary search

function search(arr, target){
    let low = 0,high = arr.length-1, mid = 0;

    while(low <= high){
        mid = Math.floor((low + high)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}

let arr = [1,3,4,5,6,9,11];
console.log(search(arr, 4));

const flights = ['06:30', '08:15', '09:00', '10:45', '13:20', '15:50', '18:10'];
function bookFlight(times, target){
    let low = 0;
    let high = times.length-1;
    let ans = -1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(times[mid] === target){
            return times[mid];
        }
        
        if(times[mid] < target){
            ans = mid;
            low = mid+1;
        }else{
            ans=mid;
            high = mid -1;
        }
    }
    
    return ans!==-1?times[ans]:"No flights";
}

console.log(bookFlight(flights,"09:45"));

