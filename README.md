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
Jestは自動的にxxxx.test.jsという名前のファイルを見つけてテストします。
```
# ./hoge.test.js をテストする場合
jest hoge

# ./test/foo.test.js をテストする場合
jest foo
```

# カバレッジの目安
`jest --coverage`コマンドを実行することでカバレッジの計測ができる。  
HTML形式で`${プロジェクト}/coverage/lcov-report/index.html`に出力される。  
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 hoge.js  |     100 |      100 |     100 |     100 |                   
 foo.js   |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
