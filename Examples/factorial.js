function factorial_iteratively(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorial_recursively(num) {
  if (num <= 2) return num;
  return num * factorial_recursively(num - 1);
}

console.log(factorial_iteratively(4)); // 24
console.log(factorial_recursively(4)); // 24
