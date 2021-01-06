function numberWithComma(num) {
  const str = num.toString();
  const arr = str.split('');
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && i < arr.length - 1) {
      arr[i] = `${arr[i]},`;
    }
    count++;
  }

  return arr.join('');
}

console.log(numberWithComma(1000000)); // 1,000,000
