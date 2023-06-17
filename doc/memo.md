# メモ

次のコマンドでプラグインをインストール

~~~shell
npm install next-pwa
~~~

TypeScriptでjQueryを使うには、jQueryの型情報を追加する必要がある
例えば、jQueryはもともとJavaScript用のライブラリなので、TypeScript用の型情報は提供していない
、次のように自力で型情報を付けることで、TypeScriptコードから利用できるようになります
（実際には、DefinitelyTypedプロジェクトが提供する@types/jqueryを使用するのが簡単です）

~~~shell
npm install --save-dev @types/jquery
~~~

~~~TypeScript
import * as $ from 'jquery'; //インポート
~~~

> 参考 <https://www.commte.co.jp/learn-nextjs/PWA>
