
const age = (x, y) => {
  const s = Math.sign(x);
  let n = 100;
  for (let i = 0; i < 1000; ++i) {
    n += x * s;
    n /= y ** s;
  }
  return s > 0 ? x + n : n;
};
  
age(-15, 0.25);
age(6, 3);
age(30, 1.4918032786885247);
