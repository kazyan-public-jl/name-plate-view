# name-plate-view

## 概要

指定したフォルダにある画像を順番に読み込み、
名札に使えるレイアウトに整えて配置し、
そのまま印刷できる形で出力する。

```
# リポジトリ取得
git clone https://github.com/kazyan-public-jl/name-plate-view.git

# リポジトリに移動
cd name-plate-view

#ネームプレートページを表示する
open ./simpleHtml/index.html
```

一旦、移植しやすいようにベタなHTML/CSS/JSのファイル構成で作成した。

name-plate-view/simpleHTML/index.html
name-plate-view/simpleHTML/NamePlateView.css
name-plate-view/simpleHTML/NamePlateView.js

## 参考

- [【決定版】印刷用CSSはこれでいこう！](https://m-pixellabo.com/blog/%E3%80%90%E6%B1%BA%E5%AE%9A%E7%89%88%E3%80%91%E5%8D%B0%E5%88%B7%E7%94%A8css%E3%81%AF%E3%81%93%E3%82%8C%E3%81%A7%E3%81%84%E3%81%93%E3%81%86%EF%BC%81/)
- [Document.createElement - Web API | MDN](https://goo.gl/ce0bKK)
- [rotate() - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/transform-function/rotate)
- [Macでターミナルからブラウザを立ち上げる](http://kazuph.hateblo.jp/entry/2012/09/20/091710)