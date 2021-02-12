/* jshint esversion:6 */
const sortFunction = (a,b) => a-b;
const findMedianSortedArrays = function(nums1, nums2) {
    let mergedArrays = [...nums1, ...nums2];
    const sortedMergedArray = mergedArrays.sort(sortFunction);
    //even number of elements
    if (sortedMergedArray.length > 1 && sortedMergedArray.length%2 == 0){
        const lowerMiddleElement = Math.floor((sortedMergedArray.length-1)/2);
        return Number((sortedMergedArray[lowerMiddleElement] + sortedMergedArray[lowerMiddleElement + 1])/2).toFixed(5);
    } else //odd number of elements
    {
        const middleElement = Math.floor((sortedMergedArray.length-1)/2);
        return Number(sortedMergedArray[middleElement]).toFixed(5);
    }
};

console.log(findMedianSortedArrays([2],[]));