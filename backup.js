// merge sort
// merge two array
const merge = (arr1, arr2) => {
  if (arr1 === undefined) arr1 = [];
  if (arr2 === undefined) arr2 = [];
  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
// console.log(mergeSort([5, 2, 9, 6, 4, 8]));

// quick sort
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const swapIndex = pivot(arr, start, end);

    quickSort(arr, start, swapIndex - 1);
    quickSort(arr, swapIndex + 1, end);
  }
  return arr;
};

console.log(quickSort([4, 8, 7, 3, 9, 6, 2, 5]));
