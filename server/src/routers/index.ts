import TestController from '../controller/test'

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
    action: TestController.register
  },
  // 登录
  {
    path: '/api/login',
    method: 'post',
    action: TestController.login
  }
]