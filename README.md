### 環境変数
- CONTENTFUL_SPACE_ID=
- CONTENTFUL_ACCESS_TOKEN=
- TOP_PAGE_WORD=
- SITE_TITLE=


## 以下、Gatsby Contentful StarterのReadMe
## はじめに

[Contentful公式スタートガイド](https://www.contentful.com/developers/docs/tutorials/general/get-started/)をご覧ください。

### ソースコードを入手し、依存関係をインストールします。

```
$ git clone https://github.com/contentful/starter-gatsby-blog.git
npmインストール
```

または、[Gatsby CLI](https://www.npmjs.com/package/gatsby-cli)を使用します。

```
$ gatsby new contentful-starter-blog https://github.com/contentful/starter-gatsby-blog/
```

### 必要なコンテンツモデルのセットアップと設定ファイルの作成

このプロジェクトには、Contentfulのセットアップコマンド `npm run setup` が付属しています。

このコマンドは、スペースIDとContentful Management and Delivery APIのアクセストークンを要求し、必要なコンテンツモデルを定義したスペースにインポートして設定ファイル(`./.contentful.json`)を記述します。

npm run setup` が自動で行ってくれますが、自分で行う場合は `.contentful.json.sample` を `.contentful.json` にリネームして、このファイルに設定を追加してください。

## 重要なコマンド

### npm run dev`

開発モードでライブリロードを行い、ローカルでプロジェクトを実行します。

### `npm run build`

本番ビルドを `./public` に実行します。これで、任意の静的ホスティングに置くことができるようになります。

### `npm run serve`

あなたのブログがある本番用のサーバーを立ち上げます。事前にページをビルドしておくことを忘れずに。

## デプロイメント

Contentful公式スタートガイド](https://www.contentful.com/developers/docs/tutorials/general/get-started/)を参照してください。

www.DeepL.com/Translator（無料版）で翻訳しました。
