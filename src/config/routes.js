import dynamic from 'dva/dynamic';
import CoreLayout from '../layout/CoreLayout';
import LoginLayout from '../layout/LoginLayout';

export default (app) => {
  // route配置
  const routes = [
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
          redirect: '/home'
        },
        {
          path: '/home',
          component: dynamic({
            app,
            models: () => [import('../models/example')],
            component: () => import('../routes/Home/IndexPage'),
          })
        },
        {
          path: '/items',
          component: dynamic({
            app,
            models: () => [],
            component: () => import('../routes/Item/List'),
          })
        },
        {
          path: '/items/:id',
          component: dynamic({
            app,
            models: () => [],
            component: () => import('../routes/Item/Detail'),
          })
        },
      ]
    },
  ]

  return routes;
}
