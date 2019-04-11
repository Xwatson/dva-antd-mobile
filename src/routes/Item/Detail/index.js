import React from 'react'

export default class Detail extends React.Component {

  componentDidMount() {
    this.props.setHeaderBar({
      title: '我是详情1',
      onChange: (e, type) => {
        console.log('headerBarChange', e, type)
        // return false // 阻止HeaderBar默认操作
      }
    })
  }
  render() {
    return (
      <div>我是详情</div>
    )
  }
}
