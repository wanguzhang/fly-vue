# fly-vue
## Vue 技巧

### require.context
```js
// 利用 webpack 导入多个组件
import CSS from '@/views/CSS.vue';

import B from '@/components/B.vue';

const arrCss = require.context('@/components/css', false, /\.vue$/);
const cssChildren = [];
arrCss.keys().forEach((component, index) => {
    const cssComponentEntity = arrCss(component).default;
    cssChildren.push({ path: cssComponentEntity.name, components: { default: cssComponentEntity, b: B }, alias: `${cssComponentEntity.name}${index}` });
});
export default {
    path: '/css', name: 'css', component: CSS, children: cssChildren, alias: '/foo',
};
```
### watch

```js
watch: {
    obj1: {
        // 理解执行
        immediate: true,
        // 深度监听
        deep: true,
        handler: 'showObje',
    }
}
```
### $attrs 和 $listeners
```txt
$attrs 拿到父传子的值，不在 props 中定义的
$listeners  可以拿到父组件绑定到子组件的方法
```

### $refs 拿到子组件实例

```js
// 父组件
<prop ref="home"/>
 //即可拿到子组件的实例,就可以直接操作 data 和 methods
this.$refs.home
```

### sync 子组件改变父组件值

```js
// 父组件
<home :title.sync="title" />
//编译时会被扩展为
<home :title="title"  @update:title="val => title = val"/>

// 子组件
// 所以子组件可以通过$emit 触发 update 方法改变
mounted(){
  this.$emit("update:title", '这是新的title')
}
```

### Object.freeze

```js
冻结对象，让 vue 不监听数据的变动。
```

### svg 使用

```js
写全局组件 '@/components/svg/IconSvg.vue'
引入所有 icon-svg '@/icons/',及注册全局 icon svg 组件
配置插件 svg-sprite-loader
    chainWebpack: (config) => {
        // 设置 public 目录别名
        config.resolve.alias.set('#', resolve('public'));

        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end();
    },
```







## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run dev
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
