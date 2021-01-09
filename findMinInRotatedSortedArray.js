const rotatedSortedArray = function(arr){
    if (arr.length == 1){
        return arr[0];
    }
    if (arr[0] < arr[arr.length - 1]){
        return arr[0];
    }
    let mid = Math.floor(arr.length/2);
    let left = 0;
    let right = arr.length-1;
    return performBinarySearch(arr, left, mid, right);
}

const performBinarySearch = function(arr, left, mid, right){
    //console.log('XXX ', arr, left, mid, right);
    if (mid == right){
        return arr[mid];
    }
    if (arr[mid] < arr[left]) {
        right = mid;
        arr = arr.slice(left, mid+1);
        mid = Math.floor(arr.length/2);
        //console.log('YYY ', arr, left, mid, right);
        return performBinarySearch(arr, left, mid, right);
    } else if (arr[mid]> arr[left]){
        left = mid;
        arr = arr.slice(mid, right+1);
        left = 0; 
        right = arr.length - 1;
        mid = Math.floor(arr.length/2);
        //console.log('ZZZ ', arr, left, mid, right);
        return performBinarySearch(arr, left, mid, right);
    }
};

console.log(rotatedSortedArray([10,7,8,9]));