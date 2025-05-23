
const createTwoSetsOfEqualSum = n => {
  const all = n * (n+1) / 2;
  if (all % 2 === 1) return [];
  const half = all / 2;
  const a = [];
  let sum = 0;
  let skip;
  let i = n;
  for (; i > 0; --i) {
    sum += i;
    if (sum > half) {
      sum -= i;
      skip = half-sum;
      a.push(skip);
      break;
    } else {
      a.push(i);
      skip = i;
      if (sum === half) break;
    }
  }
  const b = [];
  for (let j = 1; j <= i; ++j) {
    if (j === skip) continue;
    b.push(j);
  }
  return [a, b];
};

createTwoSetsOfEqualSum(3);
createTwoSetsOfEqualSum(8);
createTwoSetsOfEqualSum(9);
createTwoSetsOfEqualSum(23);
