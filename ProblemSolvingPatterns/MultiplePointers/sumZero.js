// 정렬된 정수의 배열이 주어졌을 때, 합이 0이되는 정수의 쌍을 리턴.
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];
    if (arr[left] + arr[right] < 0) left++;
    if (arr[left] + arr[right] > 0) right--;
  }

  return undefined;
}

console.log(sumZero([-8, -5, -3, -2, 0, 1, 2, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-1, 2, 3]));
console.log(sumZero([0]));
console.log(sumZero([]));
