import React from 'react'
// import { Icon as AntdIcon, Divider, Tag } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

// import styles from './index.scss'
// import Icon from '@components/Icon'

// const params: FetchParams.GetArticleList = {
//   page: 1,
//   pageSize: 6,
//   sortName: 'viewCount',
//   sortType: 'DESC',
//   justTitle: true
// }

const SiderBar = ({ history }: RouteComponentProps) => {
  return <div>Siderbar</div>
}

export default withRouter(SiderBar)
