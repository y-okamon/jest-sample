# リポジトリについての説明
[Jest公式ドキュメント](https://jestjs.io/docs/ja/getting-started)
の内容を写経して自分なりにまとめてみました。

# インストール

```
# yarnの場合
yarn add --dev jest

# npmの場合
npm install --save-dev jest
```

# 簡単なテスト(最小の使い方)

`sum.js`ファイルを作成する。
```javascript
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

`sum.test.js`ファイルを作成する。

```javascript
const sum = require('./sum'); // pathは適宜変更する

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

`package.json`に以下を追加する。
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

テストを実行すると、以下のようなメッセージが出力される。
```
npm run test
```

```
 PASS  ./sum.test.js
  √ adds 1 + 2 to equal 3 (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.44 s
Ran all test suites.
```

テストに失敗した場合は、以下のようなメッセージが出力される。  
※`toBe(3)`を`toBe(4)`に変更してテストを実施した例
```
 FAIL  ./sum.test.js
  × adds 1 + 2 to equal 3 (8 ms)

  ● adds 1 + 2 to equal 3

    expect(received).toBe(expected) // Object.is equality

    Expected: 4
    Received: 3

      2 | 
      3 | test('adds 1 + 2 to equal 3', () => {
    > 4 |   expect(sum(1, 2)).toBe(4);
        |                     ^
      5 | });
      6 | 

      at Object.<anonymous> (sum.test.js:4:21)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.605 s
Ran all test suites.
```

# コマンドラインからの実行
globalでインストール
```
# yarnの場合
yarn global add jest

# npmの場合
npm install jest --global
```

テスト実行方法
```
# ./hoge.test.js をテストする場合
jest hoge

# ./test/foo.test.js をテストする場合
jest foo
```

# matcher(マッチャー)

### 単純な値
```javascript
test('two plus two is four', () => {
  expect(2 + 2).toBe(4); // OK
});
```

```javascript
test('string check', () => {
  expect('hoge').toBe('hoge'); // OK
});
```

### オブジェクトや配列
`toEqual`は、オブジェクトまたは配列の全フィールドを再帰的にチェックする。  
  
オブジェクトの比較
```javascript
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2}); // OK
});
```

```javascript
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  // two, one の順序を入れ替えた
  expect(data).toEqual({two: 2, one: 1}); // OK
});
```

配列の比較
```javascript
test('array check', () => {
  const data = [1, 2, 3];
  expect(data).toEqual([1, 2, 3]); // OK
});
```

```javascript
test('array check', () => {
  const data = [1, 2, 3];
  expect(data).toEqual([1, 2, 4]); // NG
});
```

## 反対のテスト
```javascript
test('not zero', () => {
  expect(1 + 2).not.toBe(0); // OK
});
```

## 真偽値

- `toBeNull`は`null`のみ一致する
- `toBeUndefined `は`undefined`のみ一致する
- `toBeDefined`は`toBeUndefined`と反対になる
- `toBeTruthy`は`ifステートメント`で真であるとみなすものに一致する
- `toBeFalsy`は`ifステートメント`で偽であるとみなすものに一致する

```javascript
test('null', () => {
  const n = null;
  // all OK
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```

```javascript
test('undefined', () => {
  const n = undefined;
  // all OK
  expect(n).not.toBeNull();
  expect(n).not.toBeDefined();
  expect(n).toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```

```javascript
test('zero', () => {
  const z = 0;
  // all OK
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```
