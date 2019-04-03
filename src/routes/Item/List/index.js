import React from 'react';
import { Link } from 'dva/router';
import Page from '@page'

export default () => {
  return (
    <Page>
      <ul>
        <li><Link to="/items/1">详情1</Link></li>
      </ul>
    </Page>
  )
}
