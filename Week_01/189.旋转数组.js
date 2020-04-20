/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  /**
   * 第一种方法
   * 思路：截取添加到前面
   * 时间复杂度：nums.splice截取是O(n),nums.splicet添加O(n)，所以是O(n)。
   * 空间复杂度：right额外空间O(n)
   * 不合符题目要求
   */
  var right = nums.splice(nums.length - k, k);
  nums.splice(0, 0, ...right);
};

var rotate = function (nums, k) {
  /**
   * 第二种方法
   * 思路：从后往前 删一个，加在前面
   * 时间复杂度：while循环O(n)，nums.unshiftO(n)，嵌套所以是O(n²)。
   * 空间复杂度：i ，所以是O(1)
   */
  let i = 0;
  while (i < k) {
    nums.unshift(nums.pop());
    i++;
  }
};

var rotate = function (nums, k) {
  /**
   * 第三种方法
   * 思路：往后填，删前面
   * 时间复杂度：for循环O(n)，nums.push是O(1)，nums.splice是O(n),所以是O(n)
   * 空间复杂度：i和len ，所以是O(1)
   */
  let len = nums.length;
  k = len > k ? k : k % len;
  for (let i = 0; i < len - k; i++) {
    nums.push(nums[i]);
  }
  nums.splice(0, len - k);
};
