import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'dva';
import Page from '@page'
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <Page>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><Link to="/items">列表</Link></li>
        </ul>
      </div>
    </Page>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
