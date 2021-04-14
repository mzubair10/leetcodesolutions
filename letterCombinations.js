//jshint esversion:6
const mappingOfLettersToNumbers = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
let letters;
let combinedList;
let listOfDigitsMapping = [];
const letterCombinations = function (digits) {
  combinedList = [];
  listOfDigitsMapping = [];
  letters = digits;
  if (letters.length == 0) {
    return combinedList;
  }
  for (let iter = 0; iter < digits.length; iter++) {
    listOfDigitsMapping.push([mappingOfLettersToNumbers[digits[iter]]]);
  }
  repeatIteration(0, []);
  return combinedList;
};

const repeatIteration = function (index, charAdditiveList) {
  if (index == letters.length) {
    combinedList.push(charAdditiveList.join(""));
    return;
  }
  const lettersAtIndex = listOfDigitsMapping[index][0];
  for (let iter = 0; iter < lettersAtIndex.length; iter++) {
    charAdditiveList.push(lettersAtIndex[iter]);
    repeatIteration(index + 1, charAdditiveList);
    charAdditiveList.pop();
  }
};

console.log(letterCombinations("3"));