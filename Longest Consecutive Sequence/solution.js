// brute force
// T: O(n^2)
// S: O(1)
let longestConsecutive1 = function (nums) {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let subLength = 1;
    let focus = nums[i];
    let j = 0;
    while (j < nums.length) {
      if (focus + 1 === nums[j]) {
        focus = nums[j];
        subLength++;
        j = 0;
      } else {
        j++;
      }
    }
    if (subLength >= maxLength) {
      maxLength = subLength;
    }
  }
  return maxLength;
};

// use set, try to find first element of substring, rest iterate to get length
// T: O(n)
// S: O(n)

let longestConsecutive12 = function (nums) {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (let item of numSet) {
    let subLength = 0;
    if (!numSet.has(item - 1)) {
      while (numSet.has(item + subLength)) {
        subLength++;
      }
    }
    if (subLength > maxLength) maxLength = subLength;
  }
  return maxLength;
};
