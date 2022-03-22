function throttle(fn, ms) {
  let timer;
  let lastArgs;

  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;

        if (lastArgs) {
          try {
            fn.call(...lastArgs);
          } finally {
            lastArgs = null;
          }
        }
      }, ms);
      return fn.call(this, ...args);
    }

    lastArgs = [this, ...args];
    console.log(...args);
  };
}

function foo() {
  console.log('Boom!');
}

const throttledFoo = throttle(foo, 200);

throttledFoo();
throttledFoo();
throttledFoo();
throttledFoo();
throttledFoo();
throttledFoo();
