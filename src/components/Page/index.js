import React from "react";
import style from './index.less'

export default ({ children }) => (
  <div className={style.pageWrapper}>
    <div className={style.page}>{children}</div>
  </div>
);
