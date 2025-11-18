
const getGCD = ZERO => {
  return (a, b) => {
    if (a < ZERO) a = -a;
    if (b < ZERO) b = -b;
    if (b > a) {
      [a, b] = [b, a];
    }
    while (true) {
      if (b === ZERO) return a;
      a %= b;
      if (a === ZERO) return b;
      b %= a;
    }
  };
};

const gcd = getGCD(0);
const gcdBI = getGCD(0n);

const coprimes = n => {
  return new Array(n).fill(0).map((_, i) => i + 1).filter(i => {
    return gcd(n, i) === 1;
  });
};

coprimes(2); // -> [1]
coprimes(3); // -> [1, 2]
coprimes(6); // -> [1, 5]
coprimes(10); // -> [1, 3, 7, 9]
coprimes(20); // -> [1, 3, 7, 9, 11, 13, 17, 19]
coprimes(25); // -> [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24]
coprimes(30); // -> [1, 7, 11, 13, 17, 19, 23, 29]
