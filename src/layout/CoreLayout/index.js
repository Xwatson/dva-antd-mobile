import style from './CoreLayout.less'
import React from 'react'
import { Route, Redirect } from 'dva/router'
import PropTypes from 'prop-types'

import RouteSwitch from '@components/RouteSwitch'
import FooterBar from '@components/FooterBar'
import Page from '@page'
import NotFound from '@routes/NotFound'

export default class CoreLayout extends React.Component {
  static propTypes = {
    location: PropTypes.any,
    history: PropTypes.any,
    routes: PropTypes.array,
  }

  render() {
    const { routes, location, history } = this.props
    return (
      <div className={style.coreLayout}>
        <RouteSwitch location={location}>
          {
            routes.map(({ path, redirect, component: Component, navBar }) => {
              if (Component) {
                return <Route key={path} exact path={path} render={(props) => <Page props={props} navBar={navBar} ><Component /></Page>} />
              } else {
                return <Redirect key={path} exact from={path} to={redirect} />
              }
            })
          }
          <Route path="*" render={(props) => <Page props={props} ><NotFound /></Page>} />
        </RouteSwitch>
        <footer className={style.footer}>
          <FooterBar history={history} location={location} />
        </footer>
      </div>
    )
  }
}
