import React from 'react'
import { TabBar } from 'antd-mobile'

import Tabs from '@config/tabs'
import { getDisableFooterBar } from '../../utils/utils'
import style from './index.less'

let prevPressTime = 0
const onPress = (item, location, history) => {
  const dateNow = Date.now()
  if (location.pathname !== item.path && dateNow - prevPressTime > 500) {
    prevPressTime = dateNow
    history.push(item.path)
  }
}
export default ({ history, location }) => {
  return (
    <div className={style.footerBar}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={!getDisableFooterBar(location.pathname)}
      >
        {
          Tabs.map((item) => (
            <TabBar.Item
              title={item.title}
              key={item.path}
              icon={<span className={`iconfont ${item.icon}`}></span>}
              selectedIcon={<span className={`iconfont ${item.selectedIcon}`}></span>}
              selected={location.pathname === item.path}
              onPress={() => onPress(item, location, history)}
            />
          ))
        }
      </TabBar>
    </div>
  )
}
