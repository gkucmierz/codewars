

const ride = (a, b) => {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const map = new Map();
  [...alph].map((c, i) => map.set(c.toUpperCase(), i + 1));
  const cs = s => {
    return [...s].reduce((a, b) => a * map.get(b), 1) % 47;
  };
  return cs(a) === cs(b) ? 'GO' : 'STAY';
};

ride('COMETQ', 'HVNGAT');
