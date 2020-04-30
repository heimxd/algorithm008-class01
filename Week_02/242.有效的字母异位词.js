/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   s = [...s].sort().join('');
//   t = [...t].sort().join('');
//   return t === s;
// };
// var isAnagram = function (s, t) {
//   const smap = new Map();
//   const tmap = new Map();
//   for (let key of s) {
//     if (smap.get(key)) {
//       smap.set(key, smap.get(key) + 1);
//     } else {
//       smap.set(key, 1);
//     }
//   }
//   for (let key of t) {
//     if (tmap.get(key)) {
//       tmap.set(key, tmap.get(key) + 1);
//     } else {
//       tmap.set(key, 1);
//     }
//   }
//   if (smap.size !== tmap.size) {
//     return false;
//   }
//   for (let [key, value] of smap) {
//     if (value != tmap.get(key)) {
//       return false;
//     }
//   }
//   return true;
// };
var isAnagram = function (s, t) {
  const map = new Map();
  for (let key of s) {
    if (map.get(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  for (let key of t) {
    let value = map.get(key);
    if (value === 1) {
      map.delete(key);
    } else if (value > 1) {
      map.set(key, value - 1);
    } else {
      map.set(Symbol(key));
    }
  }
  return map.size === 0;
};
// @lc code=end
