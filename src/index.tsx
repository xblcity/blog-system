import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.scss'

import { Button } from 'antd'

const render = () => {
  ReactDOM.render(
    <div>
      <div className={styles.test}>123</div>
      <Button type="primary">按钮</Button>
    </div>,
    document.querySelector('#app')
  )
}

render()