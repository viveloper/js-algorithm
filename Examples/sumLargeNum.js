function sumLargeNum(num1, num2) {
  num1 = num1.split('').reverse();
  num2 = num2.split('').reverse();

  const result = [];
  let r = 0;
  let i = 0;
  let j = 0;
  while (i < num1.length || j < num2.length) {
    const digit1 = i < num1.length ? Number(num1[i]) : 0;
    const digit2 = j < num2.length ? Number(num2[j]) : 0;
    const sum = digit1 + digit2 + r;
    const digit = sum % 10;
    r = sum >= 10 ? 1 : 0;
    result.push(digit);
    i++;
    j++;
  }

  return result.reverse().join('');
}

console.log(sumLargeNum('2839405', '23338966038')); // 23341805443
