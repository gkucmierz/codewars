
const sequence = fn => {
  return {
    take: n => {
      const res = [];
      for (let i = 0; i < n; ++i) {
        res[i] = fn(i);
      }
      return res;
    },
    takeWhile: pred => {
      const res = [];
      for (let i = 0; 1; ++i) {
        const val = fn(i);
        if (!pred(val)) break;
        res[i] = fn(i);
      }
      return res;
    },
  };
};


sequence(n => n).takeWhile(n => n < 10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
sequence(n => n * n).take(10); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
