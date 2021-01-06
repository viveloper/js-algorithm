function fibonacci(idx, memo = {}) {
  if (idx === 1 || idx === 2) return 1;
  if (memo[idx] !== undefined) return memo[idx];
  memo[idx] = fibonacci(idx - 1, memo) + fibonacci(idx - 2, memo);
  return memo[idx];
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(100)); // 13
