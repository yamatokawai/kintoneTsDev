▼設定再取得<br>
npx @kintone/dts-gen --base-url https://bmylto4e720z.cybozu.com -u ykawai@system-renovate.co.jp -p Sysp@ssw0rd --app-id 260 --type-name Fields --namespace kintone.types -o src/sample-fields.d.ts
<br><br>
▼コンパイル方法<br>
npx webpack-cli --mode development<br>
<br>
・・・結果例・・・<br>
asset bundle.js 1.34 KiB [emitted] (name: main)<br>
./src/index.ts 153 bytes [built] [code generated]<br>
webpack 5.97.1 compiled successfully in 2088 ms<br>
<br>
▼customize-uploader<br>
kintone-customize-uploader  --base-url https://bmylto4e720z.cybozu.com --username ykawai@system-renovate.co.jp --password Sysp@ssw0rd dest/customize-manifest.json<br>
<br>
コンパイルしてから、uploadする
<br><br>
# test-plugin

▼git基礎知識<br>
https://qiita.com/yukiya1006/items/4a491df3595662d8f781
<br><br>
▼ts基礎知識<br>
・ts<br>
https://freelance.shiftinc.jp/column/typescript
<br>
・型定義<br>
https://zenn.dev/luvmini511/articles/6c6f69481c2d17
<br><br>
▼kintone-ts導入<br>
https://qiita.com/yamaryu0508/items/e7276fd721cbd19b90ab
<br><br>
▼設定再取得<br>
npx @kintone/dts-gen --base-url https://ドメイン.cybozu.com -u ログインID -p パスワード --app-id アプリ番号 --type-name Fields --namespace kintone.types -o src/sample-fields.d.ts
<br><br>
▼コンパイル方法<br>
npx webpack-cli --mode development
<br><br>
・・・結果例・・・
asset bundle.js 1.34 KiB [emitted] (name: main)
./src/index.ts 153 bytes [built] [code generated]
webpack 5.97.1 compiled successfully in 2088 ms
<br><br>
▼アップロード方法<br>
kintone-customize-uploader --base-url https://ドメイン.cybozu.com --username ログインID --password パスワード dest/customize-manifest.json
<br><br>
コンパイルしてから、uploadする
<br><br>
▼プラグインアップローダー（自動反映）<br>
<a>https://cybozu.dev/ja/kintone/sdk/development-environment/plugin-uploader/</a>
<br><br>
▼プラグイン×ts<br>
<a>https://qiita.com/tamasaka/items/49c7c9065cda8f78ad58</a>
<br><br>
▼プラグイン開発手順<br>
TS導入⇒plugin-packer導入⇒pluguin-uploader導入
