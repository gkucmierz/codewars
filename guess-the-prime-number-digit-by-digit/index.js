
// https://www.codewars.com/kata/6320b05f269dbb001fb409f1

const Sieve = (max = 1e5) => {
  const maxi = Math.sqrt(max);
  const notPrime = new Int8Array(max);
  notPrime[0] = notPrime[1] = 1;
  for (let i = 2; i < maxi; ++i) {
    if (notPrime[i] === 0) {
      for (let j = 2*i; j < max; j += i) {
        notPrime[j] = 1;
      }
    }
  }
  return {
    isPrime: n => !notPrime[n],
    getPrimes: n => {
      const res = [];
      let cnt = 0;
      const limit = Math.min(max, n);
      for (let i = 0; i < limit; ++i) {
        if (!notPrime[i]) {
          res[cnt++] = i;
        }
      }
      return res;
    }
  };
};

const sieve = Sieve(1e5);

const getHelper = n => {
  const target = n + '';
  return m => {
    const cmp = m + '';
    return [...cmp].map((d, i) => {
      if (+target[i] > +d) {
        return '<';
      } else if (+target[i] < +d) {
        return '>';
      }
      return '=';
    }).join('')
  };
};

const findPrime = helper => {
  let d5 = sieve.getPrimes(1e5).filter(n => n > 1e4);
  let max = 10;
  while (--max) {
    const mid = d5.length >> 1;
    let prime = d5[mid];
    const hint = helper(prime);
    d5 = d5.filter(n => {
      const ps = prime + '';
      const ns = n + '';
      for (let i = 0; i < 5; ++i) {
        if (hint[i] === '>') {
          if (ps[i] < ns[i]) return false;
        } else if (hint[i] === '<') {
          if (ps[i] > ns[i]) return false;
        } else {
          if (ps[i] !== ns[i]) return false;
        }
      }
      return true;
    });
    if (d5.length === 1) return d5[0];
  }
};

findPrime(getHelper(21767));
