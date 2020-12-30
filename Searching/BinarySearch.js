function binarySearch(arr, val) {
  return recursion(0, arr.length - 1);

  function recursion(start, end) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    if (arr[mid] < val) return recursion(mid + 1, end);
    if (arr[mid] > val) return recursion(start, mid - 1);
  }
}

console.log(binarySearch([3, 5, 7, 19, 32, 53, 76, 88, 92, 99], 88)); // 7
console.log(binarySearch([3, 5, 7, 19, 32, 53, 76, 88, 92, 99], 3)); // 0
console.log(binarySearch([3, 5, 7, 19, 32, 53, 76, 88, 92, 99], 99)); // 9
