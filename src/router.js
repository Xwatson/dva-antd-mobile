import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import CoreLayout from './layout/CoreLayout';
import LoginLayout from './layout/LoginLayout';
import moment from 'moment';
import { LocaleProvider } from 'antd-mobile';

import 'moment/locale/zh-cn';
moment.locale('zh-cn');

function RouterConfig({ history, app }) {

  // route配置
  const routes = [
    {
      path: '/user',
      layout: LoginLayout, // 使用登陆布局
      children: [

      ]
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
            models: () => [import('./models/example')],
            component: () => import('./routes/Home/IndexPage'),
          })
        }
      ]
    },
  ]

  return (
    <LocaleProvider>
      <Router history={history}>
        <Switch>
          {
            routes.map(({ path, layout: Layout, children }) => {
              return (
                <Route key={path} path={path}
                  component={(props) => <Layout { ...props } routes={children} />} />
              )
            })
          }
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
