//jshint esversion: 6
const isPalindrome = function(x) {
    if (x < 0){
        return false;
    }
    const splitNumber = x.toString().split("");
    const reverseSplitNumber = splitNumber.slice().reverse();
    if (Number(splitNumber.join("")) === Number(reverseSplitNumber.join(""))) {
        return true;
    }
    return false;
};

console.log(isPalindrome(9877892));