import React from 'react'
import { Menu, Icon } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import styles from './index.scss'
import { homeMenu } from '@views/App/routerMap'

const MenuItem = Menu.Item

// 首页右上角的几个
const Nav = ({ history, location }: RouteComponentProps) => {
  // 链接跳转
  const goto = ({ key }: { key: string }) => {
    if (location.pathname === key) {
      return
    }
    history.push(key)
  }

  return (
    <Menu
      className={styles.headNav}
      selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      {homeMenu.children.map(item => {
        return (
          item.title && (
            <MenuItem
              className={styles.menuItem}
              onClick={goto}
              key={item.path}
            >
              {!!item.icon && <Icon type={item.icon} />}
              <span>{item.title}</span>
            </MenuItem>
          )
        )
      })}
    </Menu>
  )
}

export default withRouter(Nav)
