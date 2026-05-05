# Hoshi Market（GitHub Pages対応）

フィギュア・ぬいぐるみ・コレクティブル向けの、日本語ECサイト用静的テンプレートです。  
`index.html` をルートに置く構成で、GitHub Pagesへそのまま公開できます。

## ファイル構成

```
/project-root
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── *.svg（ダミー画像）
└── README.md
```

## GitHub Pages 公開手順

1. GitHubで新しいリポジトリを作成します（例: `hoshi-market`）。
2. このプロジェクトファイル一式をリポジトリへアップロードします。  
   （`index.html` がルートにあることを確認）
3. GitHubで対象リポジトリを開き、**Settings** をクリックします。
4. 左メニューの **Pages** を開きます。
5. **Build and deployment** で以下を設定します。
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
6. **Save** をクリックします。
7. 数分後、以下URL形式で公開サイトへアクセスできます。

```
https://username.github.io/repository-name/
```

例:

```
https://yourname.github.io/hoshi-market/
```

## カスタマイズポイント

- `css/style.css` の `--accent` でテーマカラー変更
- `index.html` の商品カードを書き換えるだけで商品差し替え可能
- `js/script.js` でヒーロースライダー速度（`4500`ms）調整可能
