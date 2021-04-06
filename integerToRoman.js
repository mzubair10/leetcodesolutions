//jshint esversion:6
const intToRoman = function (num) {
  const stringRepOfNum = num.toString();
  let counter = 1;
  let valueReturned = [];
  for (let iter = stringRepOfNum.length - 1; iter >= 0; iter--) {
    valueReturned.unshift(
      checkRomanRepresentation(stringRepOfNum[iter], counter)
    );
    counter += 1;
  }
  return valueReturned.join("");
};
const mappingOfNumbersToRoman = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};
const getSubsequentRomanEquivalent = function (
  returnValue,
  numOfIterations,
  originalValue,
  returnArray
) {
  let firstDigit = returnValue.toString()[0];
  if (Number(firstDigit) > 0) {
    firstDigit -= 1;
  } else {
    return "";
  }
  let revisedNumberArray = [];
  revisedNumberArray.push(firstDigit);
  const remainingDigits = returnValue.toString().slice(1);
  revisedNumberArray.push(remainingDigits);
  const revisedNumber = revisedNumberArray.join("");
  let getRomanEquivalent = mappingOfNumbersToRoman[revisedNumber];
  if (getRomanEquivalent) {
    const quotient = Math.floor(originalValue/revisedNumber);
    for (let iter = 0; iter < quotient; iter++) {
      returnArray.push(getRomanEquivalent);
    }
    const reminder = originalValue % revisedNumber;
    if (reminder !=0 ) {
        if (mappingOfNumbersToRoman[reminder]){
            returnArray.push(mappingOfNumbersToRoman[reminder]);
            return returnArray.join("");
        }
        return getSubsequentRomanEquivalent(
            reminder,
            numOfIterations,
            reminder,
            returnArray
          );
    } else {
      return returnArray.join("");
    }
  } else {
    return getSubsequentRomanEquivalent(
      revisedNumber,
      numOfIterations,
      originalValue,
      returnArray
    );
  }
};
const checkRomanRepresentation = function (number, iter) {
  if (number == 0) {
    return "";
  }
  let returnValue = number;
  for (let innerIter = 1; innerIter < iter; innerIter++) {
    returnValue = returnValue * 10;
  }
  let getRomanEquivalent = mappingOfNumbersToRoman[returnValue];
  if (getRomanEquivalent) {
    return getRomanEquivalent;
  } else {
    return getSubsequentRomanEquivalent(returnValue, iter - 1, returnValue, []);
  }
};

console.log(intToRoman(2987)); //MMCMLXXXVII