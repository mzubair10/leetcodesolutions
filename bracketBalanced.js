/* jshint esversion : 6 */
const areBracketsBalanced = function (input) {
  const listOfBrackets = "[]{}<>()";
  let stack = [];
  for (let iter of input) {
    const indexOfInputInListOfBrackets = listOfBrackets.indexOf(iter);
    if (indexOfInputInListOfBrackets % 2 == 0) {
      stack.push(indexOfInputInListOfBrackets + 1);
      
    } else {
        const lastElementInStack = stack.pop();
        if (lastElementInStack != listOfBrackets.indexOf(iter)){
            return false;
        }
    }
  }
  return stack.length == 0;
};

console.log(areBracketsBalanced("([<>])"));
