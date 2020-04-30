/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// var postorder = function(root) {
//   const result = [];
//   function order(node) {
//     if (node == null) {
//       return;
//     }
//     for (let i = 0; i < node.children.length; i++) {
//       order(node.children[i]);
//     }
//     result.push(node.val);
//   }
//   order(root);
//   return result;
// };
// var postorder = function (root) {
//   const result = [];
//   function helper(node) {
//     if (node) {
//       for (let child of node.children) {
//         helper(child);
//       }
//       result.push(node.val);
//     }
//   }
//   helper(root);
//   return result;
// };
var postorder = function (root) {
  if (root == null) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const currentNode = stack.pop();
    result.push(currentNode.val);
    for (let item of currentNode.children) {
      stack.push(item);
    }
  }
  return result.reverse();
};
// @lc code=end
