test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('string check', () => {
  expect('hoge').toBe('hoge');
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('object assignment 2nd', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({two: 2, one: 1});
});

test('array check', () => {
  const data = [1, 2, 3];
  expect(data).toEqual([1, 2, 3]);
});

test('array check 2nd', () => {
  const data = [1, 2, 3];
  expect(data).toEqual([1, 2, 3]);
});

test('not zero', () => {
  expect(1 + 2).not.toBe(0);
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('undefined', () => {
  const n = undefined;
  expect(n).not.toBeNull();
  expect(n).not.toBeDefined();
  expect(n).toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

