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
      path: '/',
      layout: CoreLayout, // 使用布局
      children: [
        {
          path: '/',
          component: dynamic({
            app,
            models: () => [import('./models/example')],
            component: () => import('./routes/Home/IndexPage'),
          })
        }
      ]
    },
    {
      path: '/user',
      layout: LoginLayout,
      children: [

      ]
    }
  ]

  return (
    <LocaleProvider>
      <Router history={history}>
        <Switch>
          {
            routes.map(({ path, layout, children }) => {
              const Layout = layout
              return (
                <Route key={path} path={path} exact
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
