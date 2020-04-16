/* eslint-disable prettier/prettier */
import { lazy } from 'react'

const ArticleList = lazy(() =>
  import(/* webpackChunkName: "article-list" */ '@views/ArticleList'))

const routerMap = [
  {
    path: '/',
    title: '首页',
    component: ArticleList
  }
]

export default routerMap
