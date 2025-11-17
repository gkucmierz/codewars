
const midpointSum = arr => {
  const sums = [];
  let sum = 0;
  sums[-1] = 0;
  for (let i = 0; i < arr.length; ++i) {
    sums[i] = arr[i] + sums[i-1];
    sum += arr[i];
  }
  for (let i = 1; i < arr.length - 1; ++i) {
    if (sums[i-1] === sum - sums[i]) {
      return i;
    }
  }
  return null;
};

midpointSum([-10,3,7,8,-6,-13,21]);
midpointSum([0,0,4,0]);
midpointSum([9,0,1,2,3,4]);
midpointSum([4, 1, 7, 9, 3, 9]);