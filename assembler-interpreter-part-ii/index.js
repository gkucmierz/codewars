// https://www.codewars.com/kata/58e61f3d8ff24f774400002c/javascript

function assemblerInterpreter(program) {
  const lines = (program
    .split(/\n/)
    .map(line => line.replace(/;.*$/, '').trim())
    .filter(line => line !== ''));
  const parsed = [];
  const labels = new Map();
  let diff = 0;
  for (i = 0; i < lines.length; ++i) {
    const tokens = lines[i].split(/[,\s]+/);
    const m = tokens[0].match(/(\w+)\:/);
    if (m) {
      labels.set(m[1], i-diff);
      ++diff;
    } else if (tokens[0] === 'msg') {
      parsed[i-diff] = lines[i].match(/('[^']*')|[a-z0-9_]+/g);
    } else {
      parsed[i-diff] = tokens;
    }
  }
  let ip = 0;
  let cmp;
  const res = [];
  const stack = [];
  const regs = new Map();
  const constOrVal = n => ((+n) + '') === n ? +n : regs.get(n);
  const jmpIf = (lbl, cond) => ip = cond ? labels.get(lbl) - 1 : ip;
  const instr = {
    mov: (a, b) => regs.set(a, constOrVal(b)),
    inc: a => regs.set(a, regs.get(a) + 1),
    dec: a => regs.set(a, regs.get(a) - 1),
    add: (a, b) => regs.set(a, regs.get(a) + constOrVal(b)),
    sub: (a, b) => regs.set(a, regs.get(a) - constOrVal(b)),
    mul: (a, b) => regs.set(a, regs.get(a) * constOrVal(b)),
    div: (a, b) => regs.set(a, regs.get(a) / constOrVal(b) | 0),
    jmp: lbl => jmpIf(lbl, true),
    cmp: (a, b) => cmp = Math.sign(constOrVal(a) - constOrVal(b)),
    jne: lbl => jmpIf(lbl, cmp !== 0),
    je: lbl => jmpIf(lbl, cmp === 0),
    jge: lbl => jmpIf(lbl, cmp >= 0),
    jg: lbl => jmpIf(lbl, cmp > 0),
    jle: lbl => jmpIf(lbl, cmp <= 0),
    jl: lbl => jmpIf(lbl, cmp < 0),
    call: lbl => (stack.push(ip), jmpIf(lbl, true)),
    ret: () => ip = stack.pop(),
    msg: (...args) => res.push(args.map(arg => {
      const m = arg.match(/^'(.*)'$/);
      if (m) return m[1];
      return constOrVal(arg);
    }).join``)
  };
  let cntdwn = 1e6;
  while (ip < parsed.length && --cntdwn > 0) {
    const [cmd, ...args] = parsed[ip];
    if (cmd === 'end') return res.join``;
    instr[cmd](...args);
    ++ip;
  }
  return -1;
}
