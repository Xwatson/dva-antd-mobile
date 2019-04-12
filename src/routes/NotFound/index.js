import React from 'react'

export default ({ setHeaderBar }) => {
  setHeaderBar({
    title: '404',
    onChange: (e, type) => {
      // return false // 阻止HeaderBar默认操作
    }
  })
  return (
    <h2 style={{ textAlign: 'center' }}>未找到页面</h2>
  )
}
