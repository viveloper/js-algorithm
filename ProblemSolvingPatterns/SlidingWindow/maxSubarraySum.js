// 정수의 배열 arr과 숫자 n이 주어졌을때, 길이가 n인 SubArray중 원소의 합이 최대.

function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;
  if (arr.length < n) return null;

  let sum = arr.reduce((acc, item, idx) => (idx < n ? acc + item : acc), 0);
  let max = sum;
  for (let i = n; i < arr.length; i++) {
    sum = sum - arr[i - n] + arr[i];
    max = max < sum ? sum : max;
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([], 4)); // null
