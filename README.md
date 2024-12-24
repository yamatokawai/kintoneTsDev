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
