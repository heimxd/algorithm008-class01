/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//   const res = [];
//   function traversalInner(treeNode) {
//     if (treeNode !== null) {
//       traversalInner(treeNode.left);
//       res.push(treeNode.val);
//       traversalInner(treeNode.right);
//     }
//   }
//   traversalInner(root);
//   return res;
// };
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let currentNode = root;
  while (currentNode !== null || stack.length > 0) {
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    currentNode = stack.pop();
    res.push(currentNode.val);
    currentNode = currentNode.right;
  }
  return res;
};
// @lc code=end
