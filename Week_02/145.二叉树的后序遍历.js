/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function (root) {
//   const res = [];
//   function traversalInner(treeNode) {
//     if (treeNode !== null) {
//       traversalInner(treeNode.left);
//       traversalInner(treeNode.right);
//       res.push(treeNode.val);
//     }
//   }
//   traversalInner(root);
//   return res;
// };
var postorderTraversal = function (root) {
  if (root === null) {
    return [];
  }
  const res = [];
  //   const stack = [];
  //   let currentNode = root;
  //   while (currentNode !== null || stack.length > 0) {
  //     while (currentNode !== null) {
  //       stack.push(currentNode);
  //       currentNode = currentNode.left;
  //     }
  //     currentNode = stack.pop();
  //     res.push()
  //   }
  //   return res.reverse();
  const stack = [root];
  while (stack.length > 0) {
    // const currentNode = stack.pop();
    // res.unshift(currentNode.val);
    // if (currentNode.left !== null) {
    //   stack.push(currentNode.left);
    // }
    // if (currentNode.right) {
    //   stack.push(currentNode.right);
    // }
    const currentNode = stack.pop();
    res.push(currentNode.val);
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  return res.reverse();
};
// @lc code=end
