import { lazy } from 'react'

const PageA = lazy(() => import(/*webpackChunkName: 'pag-a'*/ '@views/PageA'))
const PageB = lazy(() => import(/*webpackChunkName: 'pag-b'*/ '@views/PageB'))

const routerMap = [
  {
    path: '/',
    component: PageA
  },
  {
    path: '/page-b',
    component: PageB
  }
]

export default routerMap
