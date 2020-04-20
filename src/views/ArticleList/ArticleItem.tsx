import React, { useMemo } from 'react'
import { Divider } from 'antd'
import classnames from 'classnames'

import { markdownToHtml } from '@utils/index'
import styles from './index.scss'
import ArticleTags from '@components/ArticleTags'
import Icon from '@components/Icon'
import { useTagStore } from '@store/index'
import { getTagColor, getWindowWidth } from '@utils/index'

export interface ReplyItem extends CommentItem {}

interface User {
  id: number
  username: string
}

export interface CommentItem {
  content: string
  createdAt: string
  id: number
  user?: User
  replies: ReplyItem[]
  replyUser?: User
  targetUsername?: string
}

export interface ArticleItem {
  content: string
  title: string
  id: number
  tags: ITagStore.TagItem[]
  createdAt: string
  updatedAt: string
  viewCount: number
  comments: CommentItem[]
}

interface IProps {
  data: ArticleItem
  getTargetArticleId: (id: number) => void
}

const ArticleItem = ({ data, getTargetArticleId }: IProps) => {
  return <div>12313</div>
}

export default ArticleItem
