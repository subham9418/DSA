
// sorting each array
// T: O(nlogn+mlogm)
// S: O(1) or O(m+n) depending on sorting algorithm
var isAnagram1 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  if (s.split("").sort().join("") === t.split("").sort().join("")) {
    return true;
  } else {
    return false;
  }
};


// create map of characters in each array and evaluate the maps to
// T: O(n+m)
// S: O(1) since we have at most 26 different characters.
var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let freqMap1 = {};

  for (let item of s) {
    if (freqMap1[item]) {
      freqMap1[item]++;
    } else {
      freqMap1[item] = 1;
    }
  }

  let freqMap2 = {};

  for (let item of t) {
    if (freqMap2[item]) {
      freqMap2[item]++;
    } else {
      freqMap2[item] = 1;
    }
  }

  for (let item in freqMap1) {
    if (freqMap2[item] !== freqMap1[item] || !freqMap2[item]) {
      return false;
    }
  }
  return true;
};






