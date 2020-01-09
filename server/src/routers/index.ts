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
  }
]