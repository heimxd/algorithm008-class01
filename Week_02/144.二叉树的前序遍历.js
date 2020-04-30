/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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

// var preorderTraversal = function (root) {
//   const res = [];
//   function traversalInner(treeNode) {
//     if (treeNode !== null) {
//       res.push(treeNode.val);
//       traversalInner(treeNode.left);
//       traversalInner(treeNode.right);
//     }
//   }
//   traversalInner(root);
//   return res;
// };
var preorderTraversal = function (root) {
  if (root === null) {
    return [];
  }
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length > 0) {
    const currentNode = stack.pop();
    res.push(currentNode.val);
    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }
  return res;
};
// @lc code=end
