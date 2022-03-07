# uni-ui-components-types

> 从 [__@dcloudio/uni-ui__](https://www.npmjs.com/package/@dcloudio/uni-ui) 的所有vue组件中提取 `props` 和 `emits`，并生成 `.d.ts`，使得在使用 Volar 插件时 uni-ui 的组件有代码提示

## 使用方法

1. 安装依赖

```bash
npm i -D uni-ui-components-types
```

2. 配置 _ts.config.json_ 文件
在 `types` 字段中添加 `uni-ui-components-types`

```json
{
  "compilerOptions": {
    "types": ["uni-ui-components-types"],
  },
}
```

3. 重启 vscode
