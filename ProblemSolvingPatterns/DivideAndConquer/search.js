// 정렬된 배열에서 타겟 원소의 인덱스를 리턴.

function search(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let pivot = Math.floor((left + right) / 2);
    if (arr[pivot] === value) return pivot;
    if (arr[pivot] < value) left = pivot + 1;
    else right = pivot - 1;
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
