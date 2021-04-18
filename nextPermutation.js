//jshint esversion:6
const filterElements = function(arr, elt){
    return arr.filter(itm => itm > elt).sort((a,b)=>a-b).slice(0)[0];
};
const nextPermutation = function(nums) {
    const numsLength = nums.length - 1;
    let lastDigit = nums[numsLength];
    let minValue = Number.NEGATIVE_INFINITY;
    for(let iter = numsLength-1; iter>= 0; iter--){
        lastDigit = nums[iter] < minValue ? minValue : lastDigit;
        if (nums[iter] < lastDigit){
            lastDigit = filterElements(nums.slice(iter), nums[iter]);
            const indexOfLastDigit = nums.indexOf(lastDigit, iter);
            let temp = nums[iter];
            nums[iter] = lastDigit;
            nums[indexOfLastDigit] = temp;
            let counter = iter+1;
            while(counter +1 < nums.length){
                if (nums[counter] > nums[counter+1]){
                    temp = nums[counter];
                    nums[counter] = nums[counter+1];
                    nums[counter+1] = temp;
                    counter = iter+1;
                    continue;
                }
                counter += 1;
            }
            return nums;
        } else {
            minValue = Math.min(nums[iter], lastDigit);
            lastDigit = nums[iter];
        }
    }
    return nums.sort((a,b)=>a-b);
};

console.log(nextPermutation([21,3,20,10,14,18,22,22,20,22,4,5,28,24,20,18,4,22,5,24,22,7,15,7,25,12,22,
    28,6,6,0,20,9,21,22,16,9,14,8,22,28,12,27,18,6,17,7,10,9,4]));