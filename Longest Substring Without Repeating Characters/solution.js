var lengthOfLongestSubstring = function (s) {
  let charMap = {};
  let left = 0;
  let res = 0;
  for (let r = 0; r < s.length; r++) {
    let curr = s[r];
    while (curr in charMap) {
      delete charMap[s[left]];
      left++;
    }
    charMap[curr] = true;
    res = Math.max(r - left + 1, res);
  }

  return res;
};
