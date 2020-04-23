import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
// import { Dropdown, Icon as AntdIcon, Menu } from 'antd'
import { Dropdown, Menu } from 'antd'
// import { Dropdown, Icon as AntdIcon, Menu } from 'antd'

import styles from './index.scss'
import Icon from '@components/Icon'
import { homeMenu } from '@views/App/routerMap'

const MenuItem = Menu.Item

// 响应式布局
const HeaderLeft = ({ history }: RouteComponentProps) => {
  // 渲染menu
  const renderMenu = () => {
    const list = homeMenu.children.filter(item => !!item.title)
    return (
      <Menu className={styles.menu}>
        {list.map(item => (
          <MenuItem
            onClick={() => history.push(item.path)}
            className={styles.mobileMenuItem}
            key={item.path}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon className={styles.menuIcon} id={item.icon} />
              {item.title}
            </div>
          </MenuItem>
        ))}
      </Menu>
    )
  }
  // 渲染标题以及nav链接
  return (
    <div className={styles.headLeft}>
      <div className={styles.title} onClick={() => history.push('/')}>
        <Icon className={styles.icon} width={20} height={20} id="boke1" />
        小白龙的博客
      </div>
      <Dropdown
        getPopupContainer={() => document.querySelector('.' + styles.headLeft)}
        trigger={['click']}
        overlay={renderMenu()}
        overlayClassName={styles.mobileMenu}
      >
        <Icon id="enabled" className={styles.drowDownIcon} />
      </Dropdown>
    </div>
  )
}

export default withRouter(HeaderLeft)
