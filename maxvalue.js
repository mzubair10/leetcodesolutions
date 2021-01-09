var maxProduct = function(nums) {
   let minUntilIndexi = [nums[0]];
   let maxUntilIndexi = [nums[0]];
   let maxValue = nums[0];
   for(let i=1; i< nums.length; i++){
       maxUntilIndexi[i] = Math.max(nums[i], nums[i] * maxUntilIndexi[i-1], nums[i] * minUntilIndexi[i-1]);
       minUntilIndexi[i] = Math.min(nums[i], nums[i] * maxUntilIndexi[i-1], nums[i] * minUntilIndexi[i-1]);
       maxValue = Math.max(maxValue, maxUntilIndexi[i]);
       console.log('maxUntilIndexi ', maxUntilIndexi[i]);
       console.log('minUntilIndexi ', minUntilIndexi[i]);
       console.log('maxValue ', maxValue);
   }
   return maxValue;
};

console.log(maxProduct([-1,-2,-9,-6]));