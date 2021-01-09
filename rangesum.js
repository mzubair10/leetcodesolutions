//Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
//Output: 32
var rangeSumBST = function(root, low, high) {
    let totalSum = 0;
    function dfs(node){
        if (!node){
            return;
        }
        if(node.val >= low && node.val <= high){
            totalSum += node.val;
        }
        if (low < node.val){
            dfs(node.left);
        }
        if (high > node.val){
            dfs(node.right);
        }
    }
    dfs(root);
    return totalSum;
};

console.log(rangeSumBST([10,5,15,3,7,null,18],7,15));