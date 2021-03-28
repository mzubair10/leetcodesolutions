//jshint esversion:6
const isMatch = function (s, p) {
  let splitString = s.split("");
  let splitPattern = p.split("");
  let matrix = [];
  splitPattern.unshift("");
  splitString.unshift("");
  let maxItemsCountInMatrix = splitPattern.length;
  if (splitString.length > splitPattern.length)
    maxItemsCountInMatrix = splitString.length;
  for (let iter = 0; iter < splitString.length; iter++) {
    matrix.push([]);
  }
  for (let sIter = 0; sIter < splitString.length; sIter++) {
    for (let pIter = 0; pIter < splitPattern.length; pIter++) {
      if (sIter == 0 && pIter == 0) {
        matrix[sIter][pIter] = "T";
        continue;
      }
      if (
        splitPattern[pIter] != "." &&
        splitPattern[pIter] != "*" &&
        splitString[sIter] != splitPattern[pIter]
      ) {
        matrix[sIter][pIter] = "F";
        continue;
      } else if (
        splitString[sIter] == splitPattern[pIter] ||
        splitPattern[pIter] == "."
      ) {
        if (sIter == 0) {
          matrix[sIter][pIter] = "F";
          continue;
        }
        matrix[sIter][pIter] = matrix[sIter - 1][pIter - 1];
        continue;
      } else if (splitPattern[pIter] == "*") {
        const twoColumnsBackwardValue = matrix[sIter][pIter - 2];
        if (twoColumnsBackwardValue == "F") {
          if (
            splitString[sIter] == splitPattern[pIter - 1] ||
            splitPattern[pIter - 1] == "."
          ) {
            if (sIter == 0) {
              matrix[sIter][pIter] = "F";
              continue;
            }
            const valueAtTop = matrix[sIter - 1][pIter];
            matrix[sIter][pIter] = valueAtTop;
            continue;
          } else {
            matrix[sIter][pIter] = "F";
            continue;
          }
        } else {
          matrix[sIter][pIter] = "T";
          continue;
        }
      }
    }
  }
  console.log(matrix);
  if (matrix[splitString.length - 1][splitPattern.length - 1] == "T")
    return true;
  return false;
};

console.log(isMatch("xaabyc", "xa*b.c"));
