// function zip(str) {
//   return str.replace(/([a-z]{3})\1+|([a-z]{2})\2+|([a-z])\3+/g, (str, $1, $2, $3) => {
//     return $1 || $2 || $3;
//   });
// }

// function zip(str) {
//   return str.replace(/([a-z]{1,3})\1+/g, '$1');
// }

// function zip(str) {
//   return str.replace(/([a-z]{3}|[a-z]{2}|[a-z])\1+/g, '$1');
// }

// console.log(zip('abababbbabcabc')); // abbabc

function zip(str) {
  if (/[^a-z]/.test(str)) {
    throw new Error('The string contains the locked characters');
  }

  // const arr = Array.from(str);
  const arr = [...str];

  let res = '';
  let tmp = '';

  for (let i = 0; i < arr.length; i++) {
    const groups = [
      arr[i],
      arr.slice(i, i + 2).join(''),
      arr.slice(i, i + 3).join(''),
    ];

    let groupI = 0;

    const hasSameAheadGroup = () => {
      const nextGroups = [
        arr[i + 1],
        arr.slice(i + 2, i + 4).join(''),
        arr.slice(i + 3, i + 6).join(''),
      ];

      for (let i = groups.length; i--;) {
        if (groups[i] === nextGroups[i]) {
          groupI = i;
          return true;
        }
      }

      return false;
    };

    const hasSameBehindGroup = () => {
      const prevGroups = [
        arr[i - 1],
        arr.slice(i - 4, i - 2).join(''),
        arr.slice(i - 6, i - 3).join(''),
      ];

      for (let i = groups.length; i--;) {
        if (groups[i] === prevGroups[i]) {
          return true;
        }
      }

      return false;
    };

    if (hasSameAheadGroup()) {
      if (tmp !== '' && tmp !== groups[groupI]) {
        res += tmp;
      }
      tmp = groups[groupI];
      i += tmp.length * 2 - 1;
      continue;
    }

    if (tmp !== '') {
      res += tmp;
      const next = tmp.length - 1;
      tmp = '';

      if (hasSameBehindGroup()) {
        i += next;
        continue;
      }
    }

    res += arr[i];
  }

  res += tmp;
  return res;
}

console.log(zip('abababbbabcabc')); // abbabc

