var numberOfAlternatingGroups = function (colors, k) {
  let res = 0;

  // Extend the array to handle circular sequences
  for (let i = 0; i < k - 1; i++) {
    colors.push(colors[i]);
  }
  let l = 0;
  let r = 1;

  while (r < colors.length) {
    // Check if the current color is the same as the last one
    if (colors[r] === colors[r - 1]) {
      // pattern breaks, reset window from the current window
      l = r;
      r += 1;
      continue;
    }
    // extend window
    r += 1;

    // skip counting sequence if it's length is less than k
    if (r - l < k) continue;

    // record a valid sequence and srink window from the left to search for more
    res += 1;
    l += 1;
  }
  return res;
};
