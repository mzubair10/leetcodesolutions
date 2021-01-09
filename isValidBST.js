/* jshint esversion: 6 */
var isValidBST = function (root) {
  let stackElts = [];
  let minValueToBeCompared = Number.NEGATIVE_INFINITY;
  while (root != null || stackElts.length > 0) {
    while (root != null) {
      stackElts.push(root);
      root = root.left;
    }
    root = stackElts.pop();
    if (root.val < minValueToBeCompared) {
      return false;
    }
    minValueToBeCompared = root.val;
    root = root.right;
  }
  return true;
};