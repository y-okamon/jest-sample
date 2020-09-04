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

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({two: 2, one: 1});
});

test('array check', () => {
  const data = [1, 2, 3];
  expect(data).toEqual([1, 2, 3]);
});

test('array check', () => {
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

test('two plus two', () => {
  const value = 2 + 2;
  // all OK
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // 数値の場合は、toBe と toEqual は同等である
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); // NG
  expect(value).toBeCloseTo(0.3);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'apple',
  'orange',
  'banana',
];

test('toContain check', () => {
  expect(shoppingList).toContain('banana');
  expect(new Set(shoppingList)).toContain('apple');
});

function doAction() {
  throw new Error('test error throw function.');
}

test('throw Error check', () => {
  expect(doAction).toThrow();
  expect(doAction).toThrow(Error);

  // エラーメッセージまたは正規表現指定も可能
  expect(doAction).toThrow('test error');
  expect(doAction).toThrow('test error throw function.');
  expect(doAction).toThrow(/throw/);
});
