import dva from 'dva'
import './index.less'
import { createBrowserHistory } from 'history'
import createLoading from 'dva-loading'
import { Toast } from 'antd-mobile'

import * as sw from './serviceWorker'

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
  onStateChange(state){
    window.__state__ = state
  },
  onError(error) {
    console.error(`全局error: ${error}`)
    Toast.error(`出错了: ${error}`)
  },
})

// 2. Plugins
app.use(createLoading({ effects: true }))

// 3. Model
// app.model(require('./models/example').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')

sw.register()
