// https://www.codewars.com/kata/56eb16655250549e4b0013f4/javascript

function mostFrequentDays(year) {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const ds = new Date(year, 0, 1, 0, 0, 0, 0);
  const de1 = new Date(year, 0, 365, 0, 0, 0, 0);
  const de2 = new Date(year, 0, 366, 0, 0, 0, 0);
  const de = de2.getFullYear() === year ? de2 : de1;
  const freq = [];
  for (let i = ds.getDay();1; ++i) {
    freq.push((i+6)%7);
    if (i % 7 === de.getDay()) {
      break;
    }
  }
  return freq.sort((a, b) => a-b).map(w => weekdays[w]);
}
