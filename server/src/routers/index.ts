import TestController from '../controller/test'

import {
  UserController,
  ArticleController,
  TagController,
  CommentController,
  ReplyController,
} from '../controller'

export interface RouteItem {
  path: string,
  method: 'get' | 'post' | 'put' | 'delete'
  action: any
}

export const AppRoutes: RouteItem[] = [
  {
    path: '/api/test',
    method: 'get',
    action: TestController.test
  },
  // 注册
  {
    path: '/api/register',
    method: 'post',
    action: UserController.register
  },
  // 登录
  {
    path: '/api/login',
    method: 'post',
    action: UserController.login
  },
  // 用户
  {
    path: '/api/user/list',
    method: 'get',
    action: UserController.getList
  },
  {
    path: '/api/user/delete',
    method: 'delete',
    action: UserController.deleteUserById
  },
  // 文章
  {
    path: '/api/article/create',
    method: 'post',
    action: ArticleController.createArticle
  },
  {
    path: '/api/article/list',
    method: 'get',
    action: ArticleController.getArticleList
  },
  {
    path: '/api/article/detail',
    method: 'get',
    action: ArticleController.getArticleById
  },
  {
    path: '/api/article/delete',
    method: 'delete',
    action: ArticleController.deleteArticleById
  },
  {
    path: '/api/article/update',
    method: 'put',
    action: ArticleController.updateArticle
  },
  // 标签
  {
    path: '/api/tag/list',
    method: 'get',
    action: TagController.getList
  },
  // 评论与回复
  {
    path: '/api/discuss/publish',
    method: 'post',
    action: CommentController.createComment
  },
  {
    path: '/api/discuss/delete',
    method: 'delete',
    action: CommentController.deleteComment
  },
  {
    path: '/api/discuss/reply',
    method: 'post',
    action: ReplyController.createReply
  },
  {
    path: '/api/discuss/reply/delete',
    method: 'delete',
    action: ReplyController.deleteReply
  }
]