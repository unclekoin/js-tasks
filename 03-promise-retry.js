promiseWithRetry(() => Promise.reject('boom!'), {
  retry: (i) => {
    console.log(i);

    if (i < 5) {
      return i * 1e3;
    }

    return false;
  }
}).catch(console.error);

function promiseWithRetry(executor, options = {}) {
  let i = 0;

  return innerExecutor();

  function innerExecutor() {
    return executor().catch((error) => {
      i++;

      if (!options.retry) {
        throw error;
      }

      const delay = options.retry(i);

      switch (delay) {
        case true:
          return innerExecutor();
        case false:
          throw error;
        default:
          return new Promise((resolve) => {
            setTimeout(() => resolve(innerExecutor()), delay);
          });
      }
    });
  }
};

