/* jshint esversion:6 */
const lengthOfLongestSubstring = function (s) {
  const splitString = s.split("");
  let maxValue = 0;
  let parsedCharArray = [];
  for(let iter=0; iter< splitString.length; iter++){
    let indexOfCharInParsedArray = parsedCharArray.indexOf(splitString[iter]);
    if(indexOfCharInParsedArray === -1){
      parsedCharArray.push(splitString[iter]);
      maxValue = Math.max(maxValue, parsedCharArray.length);
    } else {
      parsedCharArray = parsedCharArray.slice(indexOfCharInParsedArray + 1);
      parsedCharArray.push(splitString[iter]);
      maxValue = Math.max(maxValue, parsedCharArray.length);
    }
  }
  return maxValue;
};

console.log(lengthOfLongestSubstring("abcdcafzgh"));