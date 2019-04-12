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
    const { navBar } = this.props
    if (navBar && !this.callSetHeaderBarFlag) {
      this.callSetHeaderBarFlag = true
      this.setState({
        headerBarOptions: options
      })
    }
  }

  render() {
    const { props, navBar, children } = this.props
    const { headerBarOptions } = this.state
    const pathLength = props.location.pathname.split('/').length
    return (
      <div className={style.pageWrapper}>
        {
          navBar ?
            <header>
              <HeaderBar {...navBar} history={props.history} options={headerBarOptions} />
            </header> :
            null
        }
        <div className={style.pageContent} style={{ top: `${navBar ? 45 : 0}px`, bottom: `${pathLength === 2 ? 50 : 0}px` }}>{React.cloneElement(children, { ...props, setHeaderBar: this.setHeaderBar })}</div>
      </div>
    )
  }
}
