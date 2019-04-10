import React from 'react'
import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile';

export default class HeaderBar extends React.PureComponent {
  static defaultProps = {
    mode: 'light',
    title: ''
  }
  static propTypes = {
    history: PropTypes.any.isRequired
  }

  render() {
    const { title, history, onChange } = this.props
    const pathLength = history.location.pathname.split('/').length
    const defaultProps = {}
    if (pathLength > 2) {
      defaultProps.icon = <Icon type="left" />
      defaultProps.onLeftClick = (e) => {
        if (onChange instanceof Function) {
          onChange(e, 'onLeftClick') // 参数：event，事件类型
        }
        history.goBack()
      }
    }
    return (
      <NavBar {...defaultProps} {...this.props} >{title}</NavBar>
    )
  }
}
