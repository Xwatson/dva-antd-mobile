import './index.less'
import React from 'react'
import { Switch } from 'dva/router'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Tabs from '@config/tabs'

const childFactory = classNames => child => {
  return React.cloneElement(child, {
    classNames
  })
}

export default class RouteSwitch extends React.Component {
  static propTypes = {
    location: PropTypes.any.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  }

  static getDerivedStateFromProps({ location: nextLocation }, { locations: [prevLocation] }) {
    if (nextLocation !== prevLocation) {
      return {
        locations: [nextLocation, prevLocation],
      }
    }
    return null
  }

  constructor(props) {
    super(props)
    this.state = {
      locations: [{ pathname: '' }, { pathname: '' }] // 保存新，旧 location
    }
  }
  eachTabs = (currentPath, prevPath) => {
    let result = []
    Tabs.forEach((item, index) => {
      if (item.path === currentPath) {
        result[0] = { item, index }
      } else if (item.path === prevPath) {
        result[1] = { item, index }
      }
    })
    return result
  }
  render() {
    const { children } = this.props
    const { locations: [locationA, locationB] } = this.state
    let classNames = ''
    const levelA = locationA.pathname.split('/').length
    const currentTabs = this.eachTabs(locationA.pathname, locationB.pathname)
    if (currentTabs.length > 1 && levelA === 2) {
      classNames = currentTabs[0].index < currentTabs[1].index ? 'slide-right' : 'slide-left'
    } else {
      const levelB = locationB.pathname.split('/').length
      classNames = levelA < levelB ? 'slide-right' : 'slide-left'
    }

    return (
      <TransitionGroup
        className="route-switch"
        childFactory={childFactory(classNames)}
      >
        <CSSTransition
          key={locationA.key}
          classNames={classNames}
          timeout={500}
        >
          <div>
            <Switch location={locationA}>{children}</Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }

}
