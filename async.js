// 2000ms後に引数callbackを呼ぶだけの関数
const testCallback = (callback) => {
  setTimeout(() => callback('success'), 2000);
};

// promiseサンプル
// 引数がtrueならばresolve(), falseならばreject()する
const testPromise = isSuccess => {
  return new Promise((resolve, reject) => {
    isSuccess ? resolve('success') : reject('error');
  });
};

module.exports = {
  testCallback: testCallback,
  testPromise: testPromise
}
