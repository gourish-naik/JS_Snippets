function findit(arr,target){
    if(arr.length == 0){
           return "no element found!"
    }
    let mid = Math.floor(arr.length/2);
    if(arr[mid] == target) {
        return arr[mid]
    }else if (arr[mid] > target) {
        return findit(arr.slice(0, mid), target);
    } else {
        return findit(arr.slice(mid + 1), target);
    }
}

let target = 1;
let arr = [1,2,3,4,5,6,7,8,9];

console.log(findit(arr,target))

