function debounce(fn, ms, immediate) {
  let timer;
  let cancel;

  return function (...args) {
    if (!timer && immediate) {
      timer = setTimeout(() => {
        timer = null;
      }, ms);

      return new Promise((resolve) => resolve(fn.call(this, ...args)));
    }

    if (timer) {
      clearTimeout(timer);
      cancel?.(new Error('Canceled'));
    }

    return new Promise((resolve, reject) => {
      cancel = reject;

      timer = setTimeout(() => {
        timer = null;

        try {
          resolve(fn.call(this, ...args));
        } catch (e) {
          reject(e);
        }
      }, ms);
    });
  };
}

const foo = () => {
  return 'Boom!';
};

const debouncedFoo = debounce(foo, 200, true);

debouncedFoo().then(console.log);
debouncedFoo().then(console.log);
debouncedFoo().then(console.log);
debouncedFoo().then(console.log);
debouncedFoo().then(console.log);

process.addListener('unhandledRejection', console.log)
