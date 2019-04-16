import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import moment from 'moment'
import { LocaleProvider } from 'antd-mobile'
import Routes from './config/routes'

import 'moment/locale/zh-cn'
moment.locale('zh-cn')

function RouterConfig({ history, app }) {
  const routes = Routes(app)
  return (
    <LocaleProvider>
      <Router history={history}>
        <Switch>
          {
            routes.map(({ path, layout: Layout, children }) => {
              return (
                <Route key={path} path={path}
                  render={(props) => <Layout { ...props } routes={children} />} />
              )
            })
          }
        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig
