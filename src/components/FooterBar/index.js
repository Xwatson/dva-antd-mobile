import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'

import Tabs from '../../config/tabs'
import style from './index.less'

export default class FooterBar extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      currentPath: ''
    }
  }

  render() {
    const { history } = this.props
    const { currentPath } = this.state
    return (
      <div className={style.footerBar}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={false}
        >
          {
            Tabs.map((item) => (
              <TabBar.Item
                title={item.title}
                key={item.path}
                icon={<span className={`iconfont ${item.icon}`}></span>}
                selectedIcon={<span className={`iconfont ${item.selectedIcon}`}></span>}
                selected={item.defaultSelected || currentPath === item.path}
                onPress={() => history.push(item.path)}
              />
            ))
          }

        </TabBar>
      </div>
    )
  }
}
