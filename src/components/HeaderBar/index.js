import React from 'react'
import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile';

export default class HeaderBar extends React.PureComponent {
  static defaultProps = {
    mode: 'light',
    title: '',
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
    options: PropTypes.object
  }

  render() {
    const { history, options = {} } = this.props
    const pathLength = history.location.pathname.split('/').length
    const defaultProps = { ...this.props, ...options }
    if (pathLength > 2) {
      defaultProps.icon = <Icon type="left" />
      defaultProps.onLeftClick = (e) => {
        let isPreventDefault = true
        if (typeof options.onChange === 'function') {
          isPreventDefault = options.onChange(e, 'onLeftClick') // 参数：event，事件类型
        }
        if (isPreventDefault !== false) {
          history.goBack()
        }
      }
    }
    delete defaultProps.options
    return (
      <NavBar {...defaultProps} >{defaultProps.title}</NavBar>
    )
  }
}
