var groupAnagrams = function (strs) {
  let anagramMap = {};

  for (let s of strs) {
    let count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join(",");

    if (!anagramMap[key]) {
      anagramMap[key] = [];
    }
    anagramMap[key].push(s);
  }

  let groupArray = [];

  for (let key in anagramMap) {
    groupArray.push(anagramMap[key]);
  }

  return groupArray;
};

// let s = "abc"

// let count = new Array(26).fill(0);
// console.log(count);
// for (let c of s) {
//   count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
//   console.log(c.charCodeAt(0));
//   console.log("a".charCodeAt(0));
// }
// console.log(count);

// const key = count.join(",");

