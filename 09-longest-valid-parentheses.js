const longestValidParentheses = (s) => {
  let stack = [-1];
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (stack.length === 1) {
      stack[0] = i;
    } else {
      stack.pop();
      res = Math.max(res, i - stack[stack.length - 1]);
      console.log('res', stack);
    }
  }
  return res;
};

console.log(longestValidParentheses('(()'));
// console.log(longestValidParentheses(')()())'));
// console.log(longestValidParentheses('()(()'));
// console.log(longestValidParentheses('()(())'));
