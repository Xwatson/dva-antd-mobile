import style from './index.less'
import React from 'react'

import HeaderBar from '../HeaderBar'

export default ({ props, navBar, children }) => {
  return (
    <div className={style.pageWrapper}>
      <header>
        <HeaderBar {...navBar} history={props.history} />
      </header>
      <div className={style.page}>{React.cloneElement(children, props)}</div>
    </div>
  )
}
