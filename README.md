### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

## Install

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

```
# PC端
模块A [http://localhost:8080/moduleA/index.html][1]

模块B [http://localhost:8080/moduleB/index.html][2]

## 项目文件结构如下
```
    webpack
      |---build 构建文件
      |---config 构建配置
      |---dist 发布目录
      |---static 静态资源虚拟路径
      |---src
        |---api axios请求
        |---assets 资源
        |---common 公共js资源目录
        |---mock 模拟数据
        |---styles 公共样式文件
        |---components组件
        |---route 路由
        |---vues 全局状态管理
        |---modules各个模块
          |---index    index模块
            |---views 组件
            |---index.html
            |---index.js
            |---App.vue
          |---other       other模块
            |---other.html
            |---other.js
            |---App.vue
            |---views 组件
          |---同上省略其他模块，请形象命名，不宜太长。
  ```

### Browser Support

Modern browsers and Internet Explorer 10+.

### UI Library
// "element-ui": "^1.1.6",
// "iview": "^2.0.0-rc.13",
// "weui": "^1.1.2",

### License
[MIT](http://opensource.org/licenses/MIT)
