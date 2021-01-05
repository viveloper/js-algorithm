// 어떤 문자열을 재배치해서 또다른 문자열을 얻었을 때, 두 문자열은 아나그램이다.

function validAnagram(str1, str2) {
  const frequency = {};

  for (let i = 0; i < str1.length; i++) {
    const c = str1[i];
    if (frequency[c] === undefined) frequency[c] = 1;
    else frequency[c] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const c = str2[i];
    if (frequency[c] === undefined) frequency[c] = -1;
    else frequency[c] -= 1;
  }

  for (const c in frequency) {
    if (frequency[c] !== 0) return false;
  }
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('iceman', 'cinema'));
console.log(validAnagram('kkand', 'ankdk'));
