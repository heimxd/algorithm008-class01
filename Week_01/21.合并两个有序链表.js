/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  /**
   * 时间复杂度：遍历l1+l2，所以O(n)
   * 空间复杂度：引入新链表，所以O(n)
   */
  let head = null,
    currentNode = null;
  function add(node) {
    if (currentNode) {
      currentNode.next = node;
      currentNode = node;
    } else {
      head = node;
      currentNode = node;
    }
  }
  while (l1 && l2) {
    let node;
    if (l1.val < l2.val) {
      node = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      node = new ListNode(l2.val);
      l2 = l2.next;
    }
    add(node);
  }
  let l = l1 || l2;
  while (l) {
    add(new ListNode(l.val));
    l = l.next;
  }
  return head;
};
