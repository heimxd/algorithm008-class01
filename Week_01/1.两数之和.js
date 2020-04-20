/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * 思路：把遍历过的存储到map中，遍历的时候先从map中查找
   * 时间复杂度：for循环是O(n)，map.get是O(1)，所以是O(n)
   * 空间复杂度：引入map，所以O(n)
   */
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let key = target - current;
    if (map.get(current) !== undefined) {
      return [map.get(current), i];
    } else {
      map.set(key, i);
    }
  }
  return [];
};
