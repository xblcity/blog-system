/* eslint-disable prettier/prettier */
import { lazy } from 'react'

import BlogLayout from '@components/BlogLayout'

// 定义几个nav 路由单个项
export interface RouterMenuItem {
  path: string
  icon?: string
  component: React.FC<any>
  title?: string
  children?: RouterMenuItem[]
  isPrivate?: boolean
}

const ArticleList = lazy(() =>
  import(/* webpackChunkName: "article-list" */ '@views/ArticleList'))
const ArticleDetail = lazy(() =>
  import(/* webpackChunkName: "article-list" */ '@views/ArticleDetail'))
const AboutMe = lazy(() =>
  import(/* webpackChunkName: "article-list" */ '@views/AboutMe'))
const Tags = lazy(() =>
  import(/* webpackChunkName: "article-list" */ '@views/Tags'))
const TagWithArticle = lazy(() =>
  import(/* webpackChunkName: "article-list" */ '@views/TagWithArticle'))

export const homeMenu: RouterMenuItem = {
  path: '/',
  component: BlogLayout,
  children: [
    {
      path: '/',
      title: '首页',
      component: ArticleList,
      icon: 'home'
    },
    {
      path: '/tag',
      title: '标签',
      component: Tags,
      icon: 'tags'
    },
    {
      path: '/about',
      title: '关于',
      component: AboutMe,
      icon: 'user'
    },
    {
      path: '/tag/:tag',
      component: TagWithArticle
    },
    {
      path: 'article-detail/:id',
      component: ArticleDetail
    }
  ]
}

const  menu: RouterMenuItem[] = [
  homeMenu
]

export default menu
