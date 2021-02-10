/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
 */
/*jshint esversion:6 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const addTwoNumbers = function (l1, l2) {
  let stackOfFirstList = [];
  for (let iter = 0; iter < l1.length; iter++) {
    stackOfFirstList.unshift(l1[iter].val);
  }
  let reversedFirstNumber = Number(stackOfFirstList.join(""));
  stackOfFirstList = [];
  for (let iter = 0; iter < l2.length; iter++) {
    stackOfFirstList.unshift(l2[iter].val);
  }
  const reversedSecondNumber = Number(stackOfFirstList.join(""));
  const finalNumber = reversedSecondNumber + reversedFirstNumber;
  const reverseMapFn = (n) => n.toString().split("").reverse().map(Number);
  const finalReversedNumber = reverseMapFn(finalNumber);
  let finalReversedNumberArray = String(finalReversedNumber).split("").filter(x => x != ",");
  let finalConcatenatedList = [];
  for (let iter = 0; iter < finalReversedNumberArray.length; iter++) {
    let node = new ListNode(finalReversedNumberArray[iter]);
    let lastElement = finalConcatenatedList.slice(-1).pop();
    if (lastElement != null) {
      console.log('XXX ', lastElement);
      lastElement.next = node;
    }
    finalConcatenatedList.push(node);
  }
  return finalConcatenatedList;
};

let node3 = new ListNode(3);
let node2 = new ListNode(4, node3);
let node1 = new ListNode(2, node2);

let node6 = new ListNode(4);
let node5 = new ListNode(6, node6);
let node4 = new ListNode(5, node5);

let finalOutput = addTwoNumbers([node1, node2, node3], [node4, node5, node6]);
for(let iter in finalOutput){
  console.log(finalOutput[iter]);
}
