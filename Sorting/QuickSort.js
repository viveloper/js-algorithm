function quickSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  const pivot = 0;
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), arr[pivot], ...quickSort(right)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

console.log(quickSort([43, 15, 67, 86, 33, 25, 67, 9]));

const randomArr = [];
for (let i = 0; i < 1000000; i++) {
  randomArr.push(getRandomInt(0, 1000000));
}
quickSort(randomArr);
