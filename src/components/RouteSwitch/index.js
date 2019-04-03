import './index.less'
import React from 'react';
import { Switch } from 'dva/router';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const childFactory = classNames => child =>
  React.cloneElement(child, {
    classNames
  });

export default class RouteSwitch extends React.Component {
  static propTypes = {
    location: PropTypes.any.isRequired,
    children: PropTypes.element,
  }

  static getDerivedStateFromProps({ location: nextLocation }, { locations: [prevLocation] }) {
    if (nextLocation !== prevLocation) {
      return {
        locations: [nextLocation, prevLocation],
      };
    }
    return null;
  }

  constructor(props) {
    super(props)
    this.state = {
      locations: [{ pathname: '' }, { pathname: '' }] // 保存新，旧 location
    }
  }

  render() {
    const { location, children } = this.props;
    const { locations: [locationA, locationB] } = this.state;
    const levelA = locationA.pathname.split('/').length;
    const levelB = locationB.pathname.split('/').length;
    const classNames = levelA < levelB ? 'slide-right' : 'slide-left';

    return (
      <TransitionGroup
        className="route-switch"
        childFactory={childFactory(classNames)}
      >
        <CSSTransition
          key={location.key}
          classNames={classNames}
          timeout={5000}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Switch location={location}>{children}</Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }

}
