import React from 'react'
import { Icon as AntdIcon, Divider, Tag } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import styles from './index.scss'
// import Icon from '@components/Icon'
import { ArticleItem } from '@views/ArticleList/ArticleItem'
import { useTagStore } from '@store/index'
import { useGetListData } from '@utils/hooks'
import { getArticleList } from '@services/api'
import avatar from '@assets/avatar.png'

const params: FetchParams.GetArticleList = {
  page: 1,
  pageSize: 6,
  sortName: 'viewCount',
  sortType: 'DESC',
  justTitle: true
}

const SiderBar = ({ history }: RouteComponentProps) => {
  const { list } = useGetListData<ArticleItem, FetchParams.GetArticleList>(
    getArticleList,
    params
  )
  const {
    state: { tagList }
  } = useTagStore()

  return (
    <div className={styles.siderBar}>
      <img
        className={styles.siderAvatar}
        // src={require('@assets/avatar.png').default}
        src={avatar}
      />
      <h2 className={styles.siderTitle}>小白龙</h2>
      <h5 className={styles.desc}>一个进击的前端</h5>
      <div className={styles.link}>
        <div className={styles.linkItem}>
          <AntdIcon type="github" theme="filled" className={styles.linkIcon} />
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/xblcity"
            className={styles.clickLink}
          >
            github
          </a>
        </div>
      </div>
      <Divider orientation="center">热门文章</Divider>
      <div className={styles.hotArticle}>
        {list.map(item => (
          <div
            onClick={() => history.push(`/article-detail/${item.id}`)}
            className={styles.articleItem}
            key={item.id}
          >
            {item.title}
          </div>
        ))}
      </div>
      <Divider orientation="center">标签</Divider>
      <div className={styles.tagList}>
        {tagList.slice(0, 15).map(item => (
          <Tag
            onClick={() => history.push(`/tag/${item.value}`)}
            className={styles.tag}
            key={item.id}
            color={item.color}
          >
            {item.value}
          </Tag>
        ))}
      </div>
    </div>
  )
}

export default withRouter(SiderBar)
