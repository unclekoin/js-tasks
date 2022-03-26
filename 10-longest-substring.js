// const lengthOfLongestSubstring = (s) => {
//   let res = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; j > i; j--) {
//       const setSize = new Set(s.slice(i, j)).size;
//       const substrLength = s.slice(i, j).length;
//       if ((setSize === substrLength) && (substrLength > res)) {
//         res = substrLength;
//       }
//     }
//   }
//   return res;
// };

const lengthOfLongestSubstring = (s) => {
  let str = '';
  let res = 0;

  for (const c of s) {
    if (!str.includes(c)) {
      str += c;
      if (str.length > res) res = str.length;
    } else {
      str += c;
      str = str.slice(str.indexOf(c) + 1);
    }
  }
  return res;
};

console.log(lengthOfLongestSubstring('abcbcabb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('bbbbbb'));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));
