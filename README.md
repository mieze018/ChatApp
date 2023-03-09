# My Template

## Libraries

### Dev Environments

- React <https://ja.reactjs.org/>
- Next.js <https://nextjs.org/docs>

### Compiling

- TypeScript <https://nextjs.org/docs/basic-features/typescript>

### UI, Styling

- twin.macro <https://github.com/ben-rogerson/twin.macro>
  - [next-styled-components-typescript](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components-typescript)
  - stailwc <https://github.com/arlyon/stailwc>
  - Tailwind CSS <https://tailwindcss.com/docs/guides/nextjs>
  - Styled Components <https://styled-components.com/>
- Headless UI <https://headlessui.com/>
- Radix UI <https://www.radix-ui.com/docs/primitives/overview/introduction>

### Animation

- Framer Motion <https://www.framer.com/motion/>

### Icon Resources

- heroicons <https://heroicons.com/>
- Remix Icon <https://remixicon.com/>

### Linter, Formatter, Maintenance tools

- ESLint <https://eslint.org/docs/latest/>
- Prettier <https://prettier.io/docs/en/>
- ts-unused-exports <https://github.com/pzavolinsky/ts-unused-exports>

### Deployment

- Vercel

## Memo

### ファイル/ディレクトリ名

```text
TODO:教訓：後から大文字小文字を変更するとローカルでは認識されてもサーバで認識されないとか色々大変になるので要注意
一度親ディレクトリごとリネーム -> 中身のリネームし -> 親の名前戻す するとよい
```

- `./pages`以下の自動でルーティングしているページにあたるファイルはスネークケース(url のパスに準じる)
- React コンポーネント(`tsx`)やそれが入っているディレクトリはパスカルケース
- メソッドや型(`ts`)その他設定ファイルはキャメルケース

### `./components`

UI コンポーネント

### `./pages/api`

- データ配列の定義(?) もっといい呼び方あると思う
- 学んだこと! 型定義で`type`じゃなくて`interface`使う時って json のデータに型つけたい時？多分

### `./libs`

- ロジックや型や i18n

### Typescript

- ComponentProps<typeof `コンポーネント`> でコンポーネントの props の型を取得する
