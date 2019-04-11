import './LoginLayout.less'
import React from 'react'
import PropTypes from 'prop-types'

export default class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className="layout login-layout">
        login-layout
      </div>
    )
  }
}
