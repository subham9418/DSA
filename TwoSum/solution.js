var twoSum = function (nums, target) {
  let diffMap = {};

  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    let diff = target - item;

    if (diffMap[diff]) {
      return [i, nums.indexOf(diff)];
    } else {
      diffMap[item] = true;
    }
  }
};
