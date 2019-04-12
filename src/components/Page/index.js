import style from './index.less'
import React from 'react'
import PropTypes from 'prop-types'

import HeaderBar from '../HeaderBar'
export default class Page extends React.PureComponent {
  static propTypes = {
    props: PropTypes.any.isRequired,
    navBar: PropTypes.any,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  }
  constructor(props) {
    super(props)
    this.state = {
      headerBarOptions: null
    }
    this.callSetHeaderBarFlag = false
  }
  setHeaderBar = (options) => {
    if (!this.callSetHeaderBarFlag) {
      this.callSetHeaderBarFlag = true
      this.setState({
        headerBarOptions: options
      })
    }
  }

  render() {
    const { props, navBar, children } = this.props
    const { headerBarOptions } = this.state
    return (
      <div className={style.pageWrapper}>
        <header>
          <HeaderBar {...navBar} history={props.history} options={headerBarOptions} />
        </header>
        <div className={style.pageContent}>{React.cloneElement(children, { ...props, setHeaderBar: this.setHeaderBar })}</div>
      </div>
    )
  }
}
