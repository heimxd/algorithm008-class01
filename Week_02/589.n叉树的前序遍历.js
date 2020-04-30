/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function(root) {
//   //   const result = [];
//   //   function order(node) {
//   //     if (node == null) {
//   //       return;
//   //     }
//   //     result.push(node.val);
//   //     for (let i = 0; i < node.children.length; i++) {
//   //       order(node.children[i]);
//   //     }
//   //   }
//   //   order(root);
//   //   return result;
//   if (root == null) {
//     return [];
//   }
//   const result = [];
//   const stack = [];
//   stack.push(root);
//   while (stack.length > 0) {
//     const node = stack.pop();
//     result.push(node.val);
//     for (let i = node.children.length - 1; i >= 0; i--) {
//       stack.push(node.children[i]);
//     }
//   }
//   return result;
// };
// var preorder = function (root) {
//   const result = [];
//   function helper(node) {
//     if (node) {
//       result.push(node.val);
//       for (let item of node.children) {
//         helper(item);
//       }
//     }
//   }
//   helper(root);
//   return result;
// };
var preorder = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const currentNode = stack.pop();
    result.push(currentNode.val);
    for (let i = currentNode.children.length - 1; i >= 0; i--) {
      stack.push(currentNode.children[i]);
    }
  }
  return result;
};
// @lc code=end
