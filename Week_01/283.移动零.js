/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * 思路：双指针，一个指向0的位置，一个遍历往前走。前面的指针位置不为0，就和后面的指0的互换元素
   * 时间复杂度：for循环是O(n)，所以是O(n)
   * 空间复杂度：zeroIndex和i，所以是O(1)
   */
  let zeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== zeroIndex) {
        nums[zeroIndex] = nums[i];
        nums[i] = 0;
      }
      zeroIndex++;
    }
  }
};
