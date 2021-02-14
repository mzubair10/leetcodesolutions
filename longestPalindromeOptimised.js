//jshint esversion:6
const longestPalindrome = function (s) {
  const splitString = s.split("");
  let matrix = [];
  let maxLimitString = "";
  for (let iter = 0; iter < splitString.length; iter++) {
    matrix.push([]);
  }
  for (let iter = 0; iter < splitString.length; iter++) {
    matrix[iter][iter] = 1;
    if (splitString.slice(iter, iter + 1).length > maxLimitString.length) {
      maxLimitString = splitString.slice(iter, iter + 1).join("");
    }
    if (splitString[iter + 1] && splitString[iter] == splitString[iter + 1]) {
      matrix[iter][iter + 1] = 1;
      maxLimitString = splitString.slice(iter, iter + 2).join("");
    } else if (splitString[iter + 1]) {
      matrix[iter][iter + 1] = 0;
    }
  }
  let startCounter = 2;

  while (startCounter < splitString.length) {
    for (let iter = 0; iter < splitString.length; iter++) {
      if (iter + startCounter < splitString.length) {
        let localStartCounter = iter;
        let localEndCounter = iter + startCounter;
        let isLocalPalindrome = true;
        while (localStartCounter <= localEndCounter) {
          if (splitString[localStartCounter] == splitString[localEndCounter]) {
            localStartCounter++;
            localEndCounter--;
          } else {
            isLocalPalindrome = false;
            localStartCounter = localEndCounter + 1;
          }
        }
        if (isLocalPalindrome) {
          matrix[iter][iter + startCounter] = 1;
          let finalEndCount = iter + startCounter;
          if (
            splitString.slice(iter, finalEndCount + 1).length >
            maxLimitString.length
          ) {
            maxLimitString = splitString
              .slice(iter, finalEndCount + 1)
              .join("");
          }
        } else {
          matrix[iter][iter + startCounter] = 0;
        }
      }
    }
    startCounter = startCounter + 1;
  }
  return maxLimitString;
};

let retValue = longestPalindrome("ac");
console.log(retValue);
