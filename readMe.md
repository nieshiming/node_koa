#### node koa

kos 中间件 类似洋葱原理，一层层执行， 从外到里，然后在从里到外，注意每个中间件都要 next，没有 next 的话，后续中间件不会执行

#### MVC

- router 路由
- service 控制数据交互
- controller 控制业务逻辑
- middleware 引入常用中间件 或者 公共方法

#### 功能点

- [x] typescript + node
- [x] koa +  koa-router
- [x] prettier
- [x] git husky
- [x] eslint + typescript/parse
- [x] mysql
- [x] 环境隔离
- [ ] 部署腾讯云

#### 源码

- [x] koa
  ```
  Promise.resolve(fn(context, dispatch.bind(null, i + 1)))  核心bind绑定后续执行的函数
  ```
- [ ] koa-router