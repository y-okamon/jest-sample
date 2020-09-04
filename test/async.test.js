const myAsync = require('../async');

// ======== コールバック ========

test('Async callback check', done => {
  function callback(data) {
    try {
      expect(data).toBe('success'); // OK
      done();
    } catch (error) {
      done(error);
    }
  }

  myAsync.testCallback(callback);
});

// ======== Promises ========

test('Async promise(resolve) check', () => {
  return myAsync.testPromise(true).then(data => {
    expect(data).toBe('success');
  });
});

test('Async promise(reject) check', () => {
  expect.assertions(1);
  return myAsync.testPromise(false).catch(err => {
    expect(err).toMatch('error');
  });
});

test('Async promise(resolve) check', () => {
  return expect(myAsync.testPromise(true)).resolves.toBe('success');
});

test('Async promise(reject) check', () => {
  return expect(myAsync.testPromise(false)).rejects.toMatch('error');
});

// ======== Async/Await ========

test('Async promise(async/await) check', async () => {
  const data = await myAsync.testPromise(true);
  expect(data).toBe('success');
});

test('Async promise(async/await) check', async () => {
  expect.assertions(1);
  try {
    await myAsync.testPromise(false);
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('Async promise(async/await) check', async () => {
  await expect(myAsync.testPromise(true)).resolves.toBe('success');
});

test('Async promise(async/await) check', async () => {
  await expect(myAsync.testPromise(false)).rejects.toMatch('error');
});
