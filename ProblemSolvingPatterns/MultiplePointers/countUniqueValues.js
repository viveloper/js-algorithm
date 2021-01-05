// 정렬된 정수의 배열이 주어졌을 때, 중복을 제외한 유일한 원소의 개수를 리턴.
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 1;
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left = right;
      count++;
    }
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([2]));
console.log(countUniqueValues([-11, -10, -1, -1, 0, 2, 2, 2, 3, 3]));
