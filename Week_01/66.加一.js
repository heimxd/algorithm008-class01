/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    /**
     * 思路：从后往前加1，next是进位标识符
     * 时间复杂度：for循环O(n)，digits.unshift是O(n)，所以是O(n)
     * 空间复杂度：next和i，所以是O(1)
    */
  let next = 0;
  let i = digits.length - 1;
  digits[i] = digits[i] + 1;
  for (i; i >= 0; i--) {
    digits[i] = digits[i] + next;
    if (digits[i] > 9) {
      next = 1;
      digits[i] = digits[i] - 10;
    } else {
      next = 0;
    }
    if (next == 0) {
      break;
    }
  }
  if (next > 0) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end
