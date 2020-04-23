/* eslint-disable function-paren-newline */
import React, { Suspense, useEffect } from 'react'
import moment from 'moment'
import jwtDecode from 'jwt-decode'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import menu from './routerMap' // 路由list
import { useUserStore, useTagStore } from '@store/index'
import { getTagList as getTagListApi } from '@services/api'
import { RouterMenuItem } from './routerMap' // ts interface
import PageLoading from '@components/PageLoading'

const App = () => {
  const { dispatch } = useUserStore()
  const { dispatch: tagDispatch } = useTagStore()

  const initUserInfo = () => {
    const token = localStorage.getItem('token')
    if (!!token) {
      const { id, username, auth, exp } = jwtDecode(localStorage.token)
      const nowUnixTime = moment().unix()
      // 时间戳失效重新登录
      if (nowUnixTime > exp) {
        localStorage.clear()
      } else {
        // 获取用户信息
        dispatch({ type: 'USER_LOGIN', payload: { id, username, auth } })
      }
    } else {
      localStorage.clear()
    }
  }

  // 获取tags
  const getTagList = async () => {
    try {
      const res = await getTagListApi()
      tagDispatch({
        type: 'SET_TAG_LIST',
        payload: {
          list: res.data instanceof Array ? res.data : [],
          isGetTagList: true
        }
      })
    } catch (error) {}
  }

  useEffect(() => {
    initUserInfo()
    getTagList()
  }, [])

  // 对路由进行递归处理
  const renderRoutes = (routeMenu: RouterMenuItem[], path: string) => {
    const children: JSX.Element[] = []
    const renderRoute = (item: RouterMenuItem, routePath: string) => {
      const newPath = (item.path
        ? `${routePath}/${item.path}`
        : routePath
      ).replace(/\/+/g, '/')

      if (item.component && item.children) {
        const childRoutes = renderRoutes(item.children, newPath)
        const Component: React.FC<any> = item.component
        children.push(
          <Route
            key={newPath}
            path={newPath}
            render={props => <Component {...props}>{childRoutes}</Component>}
          />
        )
      } else if (item.component) {
        children.push(
          <Route
            key={newPath}
            component={item.component}
            path={newPath}
            exact
          />
        )
      } else if (item.children) {
        item.children.forEach(route => renderRoute(route, newPath))
      }
    }
    routeMenu.forEach(item => renderRoute(item, path))
    return <Switch>{children}</Switch>
  }
  const routesNode = renderRoutes(menu, '/')

  // console.log(11111, routesNode)
  // console.log(222222, menu)

  return (
    <Suspense fallback={<PageLoading />}>
      <Router>{routesNode}</Router>
    </Suspense>
  )
}

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Router>
//         <Switch>
//           {routerMap.map(item => {
//             return (
//               <Route
//                 exact={true}
//                 key={item.path}
//                 path={item.path}
//                 component={item.component}
//               />
//             )
//           })}
//         </Switch>
//       </Router>
//     </Suspense>
//   )
// }

export default App
