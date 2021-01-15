# octkit-ghe-simple-sample

[@octokit/rest](https://www.npmjs.com/package/@octokit/rest)を使用して、GitHub EnterpriseのIssueを取得するシンプルなサンプルです。

## Install

```bash
$ npm install
```

## 環境変数設定

`.env.sample`をコピーし、`.env`を作成する。

内容は以下の通り設定する。

| 項目 | 内容 | 備考 |
| -- | -- | -- |
| ACCESS_TOKEN | GitHub Enterpriseのアクセストークン | 参考: [個人アクセストークンを使用する](https://docs.github.com/ja/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) |
| BASE_URL | GitHub Enterpriseのドメインを指定する | `https://{GitHub Enterpriseのドメイン}/api/v3` |
| OWNER | リポジトリのオーナー名 | -- |
| REPO | リポジトリ名 | -- |

## 実行

```bash
$ node listForRepo.js

$ node listForRepo-with-pagination.js
```
