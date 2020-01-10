import Koa from 'koa'
import Router from 'koa-router'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import { createConnection } from 'typeorm'

import { AppRoutes } from './routers'

createConnection()
  .then(() => {
    const app = new Koa()
    const router = new Router()

    // 注册路由
    AppRoutes.forEach(route => router[route.method](route.path, route.action))

    app.use(cors())
      .use(bodyParser())
      .use(router.routes())

    app.listen(3002)
  })
  .catch(error => console.log('TypeORM 连接失败', error))
