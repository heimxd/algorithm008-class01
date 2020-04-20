/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    /**
     * 思路：双指针依次遍历nums1和nums2，添加到nums1中
     * 时间复杂度：遍历num1+nums2，所以是O(n)
     * 空间复杂度：tempNums1保存nums1数据，所以是O(n)
    */
  const tempNums1 = nums1.splice(0);
  let nums1Index = 0;
  let nums2Index = 0;
  while (nums1Index < m && nums2Index < n) {
    if (tempNums1[nums1Index] < nums2[nums2Index]) {
      nums1.push(tempNums1[nums1Index]);
      nums1Index++;
    } else {
      nums1.push(nums2[nums2Index]);
      nums2Index++;
    }
  }
  if (nums1Index < m) {
    nums1.splice(nums1.length, 0, ...tempNums1.slice(nums1Index, m));
  } else if (nums2Index < n) {
    nums1.splice(nums1.length, 0, ...nums2.slice(nums2Index, n));
  }
};
