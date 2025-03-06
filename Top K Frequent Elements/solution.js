// Map, Bucket Sort
// T: O(n)
// S: O(n)
var topKFrequent = function (nums, k) {
  let numCountMap = {};

  for (let item of nums) {
    if (numCountMap[item]) {
      numCountMap[item]++;
    } else {
      numCountMap[item] = 1;
    }
  }
  let numArr = new Array(nums.length).fill(0);

  for (let key in numCountMap) {
    let value = numCountMap[key];
    key = Number(key);
    if (numArr[value]) {
      numArr[value].push(key);
    } else {
      numArr[value] = [key];
    }
  }

  console.log(numArr);

  let resArray = [];

  console.log(resArray);

  for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i]) {
      for (let item of numArr[i]) {
        resArray.push(item);
        if (resArray.length >= k) {
          return resArray;
        }
      }
    }
  }
  return resArray;

  console.log(resArray);
};

topKFrequent([1,2], 2);