import React from 'react'
import { Menu } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Icon from '@components/Icon'

import { adminMenu } from '@views/App/routerMap' // admin路由

const MenuItem = Menu.Item

const SiderMenu = ({ history }: RouteComponentProps) => {
  // 获取菜单列表
  const getMenus = () => {
    return adminMenu.children.map(item => {
      return (
        <MenuItem key={item.path ? `/admin/${item.path}` : '/admin'}>
          <div style={{ display: 'flex' }}>
            {item.icon && <Icon id={item.icon} />}
            <span>{item.title}</span>
          </div>
        </MenuItem>
      )
    })
  }

  const goto = ({ key }: { key: string }) => {
    history.push(key)
  }
  return (
    <Menu
      selectedKeys={[location.pathname]}
      onClick={goto}
      theme="dark"
      mode="inline"
    >
      {getMenus()}
    </Menu>
  )
}

export default withRouter(SiderMenu)
