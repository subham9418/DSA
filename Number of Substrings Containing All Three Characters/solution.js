var numberOfSubstrings = function (s) {
  let alphabetMap = new Map();
  let l = 0,
    r = 0,
    res = 0;
  let freq = new Array(3).fill(0);

  while (r < s.length) {
    // Add character at right pointer to frequency array
    freq[s.charCodeAt(r) - "a".charCodeAt(0)] += 1;

    // while we have all req chars
    while (hasAllChars(freq)) {
      // All substrings from current window to end are valid
      // Add count of valid substrings

      res += s.length - r;

      //remove leftmost character and move left pointer
      freq[s.charCodeAt(l) - "a".charCodeAt(0)] -= 1;
      l++;
    }
    r++;
  }

  return res;
};

var hasAllChars = function (freq) {
  // Check if every element in freq is greater than 0
  return freq.every((f) => f > 0);
};
