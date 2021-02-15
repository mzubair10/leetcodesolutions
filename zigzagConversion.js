//jshint esversion:6
const convert = function (s, numRows) {
  const splitString = s.split("");
  let iterArray = [];
  for (let iter = 0; iter < numRows; iter++) {
    iterArray.push([]);
  }
  let splitStringCopy = splitString.slice();
  let cCounter = 0;
  while (splitStringCopy.length > 0) {
    let localRCounter = 0;
    let minCountVariable = Math.min(numRows, splitStringCopy.length);
    for (localRCounter = 0; localRCounter < minCountVariable; localRCounter++) {
      iterArray[localRCounter][cCounter] = splitStringCopy.shift();
    }
    let rCounter = numRows - 2;
    cCounter += 1;
    while (splitStringCopy.length > 0 && rCounter > 0) {
      iterArray[rCounter][cCounter] = splitStringCopy.shift();
      rCounter -= 1;
      cCounter += 1;
    }
  }
  let consolidatedFinalString = "";
  for (let iter = 0; iter < iterArray.length; iter++) {
    consolidatedFinalString += iterArray[iter].filter((c) => c != undefined).join("");
  }
  return consolidatedFinalString;
};

console.log(convert("A", 1));
