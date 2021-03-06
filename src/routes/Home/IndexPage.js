import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'dva'
import styles from './IndexPage.css'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><input type="text" /></li>
        <li><Link to="/items">列表</Link></li>
      </ul>
    </div>
  )
}

IndexPage.propTypes = {
}

export default connect()(IndexPage)
