// ======== モック関数を利用する ========

test('モック関数を利用する', () => {
  const myMock = require('../mock');

  const mockCallback = jest.fn(x => 42 + x);
  myMock.forEach([0, 1], mockCallback);

  // mock関数は2回呼ばれる
  expect(mockCallback.mock.calls.length).toBe(2);
  // 1回目の呼び出し時の引数は0
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  // 2回目の呼び出し時の引数は1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  // 1回目の呼び出し時の戻り値は42
  expect(mockCallback.mock.results[0].value).toBe(42);
  // 2回インスタンス化された
  expect(mockCallback.mock.instances.length).toBe(2);
});

test('モックの戻り値', () => {
  const myMock = jest.fn();
  console.log(myMock()); // > undefined
  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
  console.log(myMock(), myMock(), myMock(), myMock());
});

test('モックの戻り値', () => {
  const filterTestFn = jest.fn();

  // 1回目のコール時はtrueを返し、2回目のコール時はfalseを返す
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));
  console.log(result); // [11] (trueのみが抽出されている)
  console.log(filterTestFn.mock.calls); // [ [ 11 ], [ 12 ] ]
});

// ======== モックの実装 ========
test('モックの実装', () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
});

// ======== モックの実装 ========

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

test('モックの実装_mockImplementationOnceメソッド', () => {
  jest.mock('../sum')
  const sum = require('../sum');

  sum.mockImplementation((a, b) => a * b);
  sum(2, 3); // 6
});

test('モックの実装_複数回の呼び出しで異なる結果を得る', () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));

  myMockFn((err, val) => console.log(val)); // true
  myMockFn((err, val) => console.log(val)); // false
});

test('モックの実装_mockImplementationOnceメソッドを使い切った場合', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => '1st call')
    .mockImplementationOnce(() => '2nd call');

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
});

// ======== カスタムマッチャ ========
test('カスタムマッチャ', () => {
  const myMock = jest
    .fn(scalar => 42 + scalar)
    .mockName('add42');

  myMock(1);
  myMock(2);
  myMock(3);
 
  // 1度は呼ばれた
  expect(myMock).toHaveBeenCalled();
  expect(myMock.mock.calls.length).toBeGreaterThan(0);

  // 1度は指定の引数で呼ばれた
  expect(myMock).toHaveBeenCalledWith(1);
  expect(myMock.mock.calls).toContainEqual([1]);
  expect(myMock.mock.calls).toContainEqual([2]);
  expect(myMock.mock.calls).toContainEqual([3]);
  // expect(myMock.mock.calls).toContainEqual([4]); // NG

  // 最後に指定の引数で呼ばれた
  expect(myMock).toHaveBeenLastCalledWith(3);
  expect(myMock.mock.calls[myMock.mock.calls.length - 1]).toEqual([
    3
  ]);
});

// ======== jest.spyOn ========

describe('mock spyOn test', () => {
  const { item } = require('../mock');

  test('item title test', () => {
    // mockReturnValueOnceによって自由にモック化できる。
    // jest.spyOnだけでは(実際の)モック化されていない関数が実行される。
    // jset.spyOn(モジュール変数, '関数名')
    const spy = jest
      .spyOn(item, 'title')
      .mockReturnValueOnce('item sub title');

    // mockReturnValueOnceによって'item title'ではなくなる。
    expect(item.title()).toBe('item sub title');
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
