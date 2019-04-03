import './CoreLayout.less';
import React from 'react';
import { Route, Redirect } from 'dva/router';
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';

import RouteSwitch from '../../components/RouteSwitch'

export default class CoreLayout extends React.Component {
  static propTypes = {
    location: PropTypes.any,
    history: PropTypes.any,
    routes: PropTypes.array,
  }

  render() {
    const { routes, location, history } = this.props
    return (
      <div className="layout core-layout">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.goBack()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <RouteSwitch location={location}>
          {
            routes.map(({ path, redirect, component }) => {
              if (component) {
                return <Route key={path} exact path={path} component={component} />
              } else {
                return <Redirect key={path} exact from={path} to={redirect} />
              }
            })
          }
          <Route path="*" component={() => <h1>Not Found</h1>} />
        </RouteSwitch>
      </div>
    )
  }
}
