//jshint esversion:6
const threeSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let listOfTriplets = [];
  for (let firstIter = 0; firstIter < nums.length; firstIter++) {
    if (firstIter > 0 && nums[firstIter - 1] == nums[firstIter]){
        continue;
    }
    let secondIter = firstIter + 1;
    let thirdIter = nums.length - 1;
    while (secondIter < thirdIter) {
      let sumOfAllIters = nums[firstIter] + nums[secondIter] + nums[thirdIter];
      if (sumOfAllIters == 0) {
        listOfTriplets.push([
          nums[firstIter],
          nums[secondIter],
          nums[thirdIter],
        ]);
        secondIter += 1;
        thirdIter -= 1;
        while(secondIter < thirdIter && nums[secondIter] == nums[secondIter - 1]) {
            secondIter += 1;
        }
        while(secondIter < thirdIter && nums[thirdIter] == nums[thirdIter + 1]) {
            thirdIter -= 1;
        }
      } else if (sumOfAllIters < 0) {
        secondIter += 1;
      } else if (sumOfAllIters > 0) {
        thirdIter -= 1;
      }
    }
  }
  return listOfTriplets;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
