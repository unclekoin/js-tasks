log({
  a: {
    l: { u: 8 },
    b: 1
  },
  c: {
    d: 2,
    e: { f: 7 }
  },
  j: 4
});

// function log(obj) {
//   for (const key in obj) {
//     if (!obj.hasOwnProperty(key)) {
//       continue;
//     }
//
//     const value = obj[key];
//
//     if (typeof value === 'number') {
//       console.log(value);
//     } else {
//       log(value);
//     }
//   }
// }
// 8, 1, 2, 7, 4

// arrays of javascript - double-ended queue

function log(obj) {
  const stack = [intoIter(obj)];

  console.log(stack);

  while (stack.length) {
    const iter = stack.pop();

    for (const value of iter) {
      if (typeof value === 'number') {
        console.log(value);
      } else {
        stack.push(iter);
        stack.push(intoIter(value));
        break;
      }
    }
  }

  function intoIter(obj) {
    return Object.values(obj).values()
  }
}
// 8, 1, 2, 7, 4

// function log(obj) {
//   const queue = [obj];
//
//   while (queue.length) {
//     const obj = queue.shift();
//
//     for (const key in obj) {
//       if (!obj.hasOwnProperty(key)) {
//         continue;
//       }
//
//       const value = obj[key];
//
//       if (typeof value === 'number') {
//         console.log(value);
//       } else {
//         queue.push(value);
//       }
//     }
//   }
// }
// 4, 1, 2, 8, 7
