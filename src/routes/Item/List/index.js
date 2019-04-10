import React from 'react';
import { Link } from 'dva/router';

export default () => {
  return (
    <ul>
      <li><Link to="/items/1">详情1</Link></li>
    </ul>
  )
}
