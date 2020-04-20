/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  /**
   * 第一种方法
   * 思路：Set api去重
   * 时间复杂度：...解构是调用迭代器，O(n)。new Set()是O(n)。nums.splice因为全部删除，所以是O(1)。所以最终是O(n)
   * 空间复杂度：用了Set，是O(n)
   * 备注：不符合题目要求
   */
  nums.splice(0, nums.length, ...new Set(nums));
  return nums.length;
};

var removeDuplicates = function (nums) {
  /**
   * 第二种方法
   * 思路：排序好的数组。i为索引，nums[i]==nums[i-1]，就删除nums[i]
   * 时间复杂度：for循环是O(n)。nums.splice删除1个是O(n)。因为嵌套最终是O(n²)
   * 空间复杂度：只有索引i，所以是O(1)
   */
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

var removeDuplicates = function (nums) {
  /**
   * 第三种方法
   * 思路：双指针替换,慢指针记录最终数组最后一个元素位置，依次遍历数组和lastPos对比，相等lastPos停下来等，不相等就一起走。不相等的时候用第i个替换lastPos
   * 时间复杂度：for循环是O(n)。
   * 空间复杂度：索引i和lastPos，所以是O(1)
   */
  if (nums.length === 0) {
    return 0;
  }
  let lastPos = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[lastPos]) {
      lastPos++;
      if (i > lastPos) {
        nums[lastPos] = nums[i];
      }
    }
  }
  return lastPos + 1;
};
