## @felce/lowcode-engine-ext

### 简介

lowcode-engine-ext 引擎官方提供的 setter 和 setter 必须依赖的插件集合

setter(设置器) 是用来展示每个物料的属性，[setter 使用说明手册](https://www.yuque.com/lce/doc/cl03wo_nmhznb) [官方 setter 列表说明](https://www.yuque.com/lce/doc/oc220p#fl46)

### 使用方式

使用 CDN 方式引用

#### unpkg

```html
https://unpkg.com/@felce/lowcode-engine-ext@1.1.1/dist/css/engine-ext.css
https://unpkg.com/@felce/lowcode-engine-ext@1.1.1/dist/js/engine-ext.js
```

#### npmmirror

✨ 国内推荐使用 npm 镜像，速度更快

```html
https://registry.npmmirror.com/@felce/lowcode-engine-ext/1.1.1/files/dist/css/engine-ext.css
https://registry.npmmirror.com/@felce/lowcode-engine-ext/1.1.1/files/dist/js/engine-ext.js
```

#### jsdelivr

```html
https://cdn.jsdelivr.net/npm/@felce/lowcode-engine-ext@1.1.1/dist/css/engine-ext.css
https://cdn.jsdelivr.net/npm/@felce/lowcode-engine-ext@1.1.1/dist/js/engine-ext.js
```

#### 拓展变量绑定面板

通过传入 extraDataMap 拓展属性绑定面板

```typescript
ctx.skeleton.add({
  area: 'centerArea',
  type: 'Widget',
  content: pluginMap.VariableBindDialog,
  name: 'variableBindDialog',
  props: {
    getSchema: () => editorController.getSchema(),
    // 拓展变量绑定
    extraDataMap: {
      props: {
        name: 'Props', // 变量组展示名
        key: 'props', // 属性名，例如 this.props
        getChildren: () => [
          {
            label: 'prop1',
            value: 'value1',
          },
          {
            label: 'prop2',
            children: [{ label: 'propxxx', value: 1 }],
          },
        ],
      },
    },
  },
});
```
