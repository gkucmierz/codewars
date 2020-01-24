// https://www.codewars.com/kata/58791aa554a6783827000221/javascript

const phoneMap = new Map();
for (let name in phonebook) {
  phoneMap.set(phonebook[name], name);
}

function closestFriends(history) {
  const sum = new Map();
  history.map(entry => {
    const m = entry.match(/^(.*) (\d{2}):(\d{2}):(\d{2})$/);
    const [PHONE, H, M, S] = [1, 2, 3, 4];
    let duration = (+m[H]) * 3600 + (+m[M]) * 60 + (+m[S]);
    if (sum.has(m[PHONE])) {
      duration += +sum.get(m[PHONE]);
    }
    sum.set(m[PHONE], duration);
  });
  const top3 = [...sum].sort((a, b) => +b[1] - +a[1]).slice(0, 3);
  return top3.map(e => phoneMap.get(e[0]));
}
