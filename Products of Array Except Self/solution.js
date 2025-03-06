// brute force
// T: O(n^2)
// S: O(1)
let productExceptSelf1 = function (nums) {
  let outputArray = [];
  let out;

  for (let i = 0; i < nums.length; i++) {
    out = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        out = out * nums[j];
      }
    }
    outputArray.push(out);
  }

  return outputArray;
};


// Creating prefix array and post fix array
// T: O(n)
// S: O(n)
let productExceptSelf2 = function (nums) {
  let prefixArr = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) continue;
    prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
  }

  let postfixArr = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) continue;
    postfixArr[i] = postfixArr[i + 1] * nums[i + 1];
  }

  let resArr = [];

  for (let i = 0; i < nums.length; i++) {
    resArr[i] = prefixArr[i] * postfixArr[i];
  }

  return resArr;
};
