import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.scss'

const render = () => {
  ReactDOM.render(
    <div className={styles.test}>123</div>,
    document.querySelector('#app')
  )
}

render()