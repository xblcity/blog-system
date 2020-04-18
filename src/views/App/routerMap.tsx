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

const Login = lazy(() => import(/* webpackChunkName: "login" */ '@views/Login'))

const Admin = lazy(() => import(/* webpackChunkName: "admin" */ '@views/Admin'))

const AddArticle = lazy(() =>
  import(/* webpackChunkName: "add-article" */ '@views/Admin/AddArticle'))

const ArticleManager = lazy(() =>
  // eslint-disable-next-line function-paren-newline
  import(
    /* webpackChunkName: "article-manager" */ '@views/Admin/ArticleManager'))

const UserManager = lazy(() =>
  import(/* webpackChunkName: "user-manager" */ '@views/Admin/UserManager'))

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

export const adminMenu: RouterMenuItem = {
  path: 'admin',
  component: Admin,
  children: [
    {
      path: '',
      title: '文章管理',
      component: ArticleManager,
      icon: 'home'
    },
    {
      path: 'add',
      title: '添加文章',
      component: AddArticle,
      icon: 'edit'
    },
    {
      path: 'user',
      title: '用户管理',
      component: UserManager,
      icon: 'user'
    }
  ]
}

const menu: RouterMenuItem[] = [
  {
    path: 'login',
    component: Login
  },
  adminMenu,
  homeMenu
]

export default menu
