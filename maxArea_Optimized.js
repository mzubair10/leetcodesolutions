//jshint esversion: 6
const maxArea = function(height){
    let leftPointer = 0;
    let rightPointer = height.length;
    let maxAreaAvailable = 0;
    while(leftPointer < rightPointer){
        const counter = (rightPointer - leftPointer - 1);
        if (height[leftPointer] <= height[rightPointer-1]){
            maxAreaAvailable = Math.max(maxAreaAvailable,  height[leftPointer] * counter);
            leftPointer += 1;
        } else {
            maxAreaAvailable = Math.max(maxAreaAvailable,  height[rightPointer-1] * counter);
            rightPointer -= 1;
        }
    }
    return maxAreaAvailable;
};

console.log(maxArea([1,2,1]));