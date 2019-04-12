import React from 'react'
import { TabBar } from 'antd-mobile'

import Tabs from '@config/tabs'
import style from './index.less'

export default ({ history, location }) => {
  const pathLength = location.pathname.split('/').length
  return (
    <div className={style.footerBar}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={pathLength > 2}
      >
        {
          Tabs.map((item) => (
            <TabBar.Item
              title={item.title}
              key={item.path}
              icon={<span className={`iconfont ${item.icon}`}></span>}
              selectedIcon={<span className={`iconfont ${item.selectedIcon}`}></span>}
              selected={location.pathname === item.path}
              onPress={() => history.push(item.path)}
            />
          ))
        }
      </TabBar>
    </div>
  )
}
