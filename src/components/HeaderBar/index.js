import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

const HeaderBar = (props) => {
  const { history, options = {} } = props
  const pathLength = history.location.pathname.split('/').length
  const defaultProps = { ...props, ...options }
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

HeaderBar.defaultProps = {
  mode: 'light',
  title: '',
}

export default HeaderBar
