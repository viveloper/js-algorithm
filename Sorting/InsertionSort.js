function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(insertionSort([43, 15, 67, 86, 33, 25, 67, 9]));
