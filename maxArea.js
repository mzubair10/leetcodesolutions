//jshint esversion: 6
const maxArea = function (height) {
  let cumulativeMaxValue = 0;
  for (let outerIter = 0; outerIter < height.length; outerIter++) {
    let counter = 0;
    let maxValue = 0;
    for (let innerIter = outerIter+1; innerIter < height.length; innerIter++) {
      counter += 1;
      if (height[outerIter] < height[innerIter]) {
        maxValue = Math.max(maxValue, (height[outerIter] * counter));
      } else {
        maxValue = Math.max(maxValue, (height[innerIter] * counter));
      }
    }
    cumulativeMaxValue = Math.max(cumulativeMaxValue, maxValue);
  }
  return cumulativeMaxValue;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
