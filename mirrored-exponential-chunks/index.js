// https://www.codewars.com/kata/5852d0d463adbd39670000a1/javascript

function mirroredExponentialChunks(arr) {
  const len = arr.length;
  const left = arr.slice(0, len/2);
  const right = arr.slice((len+1)/2);
  const res = len % 2 === 1 ? [[arr[(len-1)/2]]] : [];
  
  for (let i = 1; left.length; ++i) {
    res.unshift(left.splice(-(2**i)));
  }
  for (let i = 1; right.length; ++i) {
    res.push(right.splice(0, 2**i));
  }
  return res;
}
