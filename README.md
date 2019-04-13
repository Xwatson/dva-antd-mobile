# dva-antd-mobile
一个基于dva+antd-mobile移动端项目

### 介绍
>* 基于 ```redux```、```redux-saga``` 和 ```react-router``` 的轻量级前端框架
>* ```roadhog``` 开箱即用的 ```react``` 应用开发工具，内置 ```css-modules、babel、postcss、HMR``` 等
>* 使用```ant-mobile```作为UI库
>* ```eslint```规则继承```umi```
>* 基于 ```react-transition-group``` 实现路由动画过度组件 ```RouteSwitch```

### 安装
```
  npm install
```
### 运行
```
  npm start
```
### 配置
> 路由配置 ```src/config/routes.js```
``` JavaScript
{
      path: '/user',
      layout: LoginLayout, // 使用登陆布局
      children: []
    },
    {
      path: '/',
      layout: CoreLayout, // 使用主布局
      children: [
        {
          path: '/',
          redirect: '/home' // 重定向路由
        },
        {
          path: '/home',
          navBar: { // 配置头部
            title: '首页'
          },
          component: dynamic({ // 使用dva/dynamic异步加载
            app,
            models: () => [import('../models/example')],
            component: () => import('../routes/Home/IndexPage'),
          })
        },
        ...
      ]
    },
```

> 页脚```tabBar```配置 ```src/config/tabs.js```
``` JavaScript
  {
    path: '/home', // 跳转路由
    title: '首页', // 显示标题
    icon: 'icon-home2', // 默认icon
    selectedIcon: 'icon-home_fill', // 选中icon
  },
  ...
```
