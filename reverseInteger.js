//jshint esversion:6
const reverse = function(x) {
    let reversedNumberArr = [];
    let absoluteValOfX = Math.abs(x);
    const maxValueAllowed = 0x7fffffff;
    while(absoluteValOfX){
        reversedNumberArr.push(absoluteValOfX % 10);
        absoluteValOfX = Math.floor(absoluteValOfX/10);
    }
    const reversedNumber = x >= 0 ? +Number(reversedNumberArr.join("")) : -Number(reversedNumberArr.join(""));
    if (Math.abs(reversedNumber) > maxValueAllowed) {
        return 0;
    }
    return reversedNumber;
};

console.log(reverse(-2147483648));