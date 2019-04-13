import style from './index.less'
import React from 'react'
import PropTypes from 'prop-types'

import HeaderBar from '../HeaderBar'
import { getDisableFooterBar } from '../../utils/utils'

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
    const isDisableFooterBar = getDisableFooterBar(props.location.pathname)
    return (
      <div className={style.pageWrapper}>
        {
          navBar ?
            <header className={style.pageHeader}>
              <div className={style.pageHeaderBar}>
                <HeaderBar {...navBar} history={props.history} options={headerBarOptions} />
              </div>
            </header> :
            null
        }
        <div className={style.pageContent}>{React.cloneElement(children, { ...props, setHeaderBar: this.setHeaderBar })}</div>
        {
          isDisableFooterBar ? <div className={style.footerPlaceholder} /> : null
        }
      </div>
    )
  }
}
