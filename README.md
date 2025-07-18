# Copernicus Sea Current Map | RGB encoded PNG Source

このリポジトリは、Copernicusの海流データをRGBエンコードPNG画像として可視化するWebアプリケーションです。

## 概要

- Copernicusの海流データをRGBエンコードPNG画像（`public/sea-current.png`）として表示します。
- Viteを用いたフロントエンドアプリケーションです。
- シンプルなUIで地図上に海流を可視化します。

## ディレクトリ構成

```
index.html
package.json
vite.config.js
public/
  sea-current.png
src/
  main.js
  style.css
```

## セットアップ

1. 依存パッケージのインストール

```bash
npm install
```

2. 開発サーバーの起動

```bash
npm run dev
```

3. ブラウザで `http://localhost:5173` を開いて動作を確認します。

## 主なファイル

- `index.html` : アプリのエントリーポイント
- `src/main.js` : メインのJavaScriptロジック
- `src/style.css` : スタイルシート
- `public/sea-current.png` : RGBエンコードされた海流データ画像

## ライセンス

このリポジトリはMITライセンスです。
