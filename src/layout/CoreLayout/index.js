import style from './CoreLayout.less'
import React from 'react'
import { Route, Redirect } from 'dva/router'
import PropTypes from 'prop-types'

import RouteSwitch from '../../components/RouteSwitch'
import Page from '@page'

export default class CoreLayout extends React.Component {
  static propTypes = {
    location: PropTypes.any,
    history: PropTypes.any,
    routes: PropTypes.array,
  }

  render() {
    const { routes, location } = this.props
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
          <Route path="*" render={(props) => <Page props={props} ><h2>Not Found</h2></Page>} />
        </RouteSwitch>
      </div>
    )
  }
}
