// jshint esversion:6
const myAtoi = function (s) {
  let trimmedInput = s.trim();
  const maxPositiveNumber = 0x7fffffff;
  const minNegativeNumber = -0x80000000;
  let signAssociated = "+";
  
  if (trimmedInput.length > 0 && (trimmedInput[0].includes("+") || (trimmedInput[0].includes("-")))){
    if (trimmedInput[0] == "-"){
        signAssociated = "-";
    }
    trimmedInput = trimmedInput.split("").slice(1);
  }
//   if (s < 0) {
//     signAssociated = "-";
//     //trimmedInput = trimmedInput.split("").slice(1);
//   }
  //const parsedInput = trimmedInput.split("");
  let parsedNumericInput = [];
  for (let iter = 0; iter < trimmedInput.length; iter++) {
    if (trimmedInput[iter] >= "0" && trimmedInput[iter] <= "9") {
      parsedNumericInput.push(trimmedInput[iter]);
    } else {
      break;
    }
  }
  let finalParsedNumericInput = parsedNumericInput.join("");
  if (
    finalParsedNumericInput.toString(16) > maxPositiveNumber ||
    finalParsedNumericInput.toString(16) < minNegativeNumber
  ) {
    if (signAssociated == "+") {
      return maxPositiveNumber;
    } else {
      return minNegativeNumber;
    }
  }
  return Number(signAssociated.concat(Math.abs(finalParsedNumericInput)));
};

console.log(myAtoi("  -0012a42"));
