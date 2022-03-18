var fns = [];

for (var i = 0; i++ < 3;) {
  fns.push(function () {
    return i + i;
  });
}

// for (let i = 0; i < 3; i++) {
//   fns.push(function () {
//     return i + i;
//   });
// }
// 0, 2

// for (var i = 0; i++ < 3;) {
//   (function (j) {
//     fns.push(function () {
//       return j + j;
//     });
//   })(i);
// }
// 2, 4

console.log(fns[0]()); // 8
console.log(fns[1]()); // 8
