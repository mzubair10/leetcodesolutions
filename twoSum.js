/* Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Output: Because nums[0] + nums[1] == 9, we return [0, 1]. */
//jshint esversion:6
const twoSum = function(nums, target) {
    for(let iter=0; iter< nums.length; iter++){
        const fixedElement = nums[iter];
        let remaingElementArray = nums.slice(iter+1);
        while(remaingElementArray.length > 0){
            const popedElement = remaingElementArray.pop();
            if (popedElement + fixedElement == target){
                return [nums.indexOf(fixedElement), nums.lastIndexOf(popedElement)];
            }
        }
    }
};

console.log(twoSum([3,3], 6));