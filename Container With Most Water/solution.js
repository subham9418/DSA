// Two pointers, updating the pointers according to height
// T: O(n)
// S: O(1)

let maxArea = function (heights) {
  let areaMax = 0;
  let area = 0;
  let start = 0;
  let end = heights.length - 1;

  while (end > start) {
    area = calculateArea(heights, start, end);
    areaMax = Math.max(areaMax, area);
    if (heights[end] > heights[start]) {
      start++;
    } else {
      end--;
    }
  }
  return areaMax;
};

function calculateArea(arr, start, end) {
  let height = Math.min(arr[start], arr[end]);
  let length = end - start;

  return height * length;
}