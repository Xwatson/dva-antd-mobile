import './CoreLayout.less';
import React from 'react';
import { Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';

export default class CoreLayout extends React.Component {
  static propTypes = {
    routes: PropTypes.array,
  }

  render() {
    const { routes } = this.props
    return (
      <div className="layout core-layout">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <Switch>
          {
            routes.map(({ path, component }) => <Route key={path} exact path={path} component={component} />)
          }
        </Switch>
      </div>
    )
  }
}
