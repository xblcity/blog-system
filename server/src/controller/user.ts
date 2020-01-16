import { Context } from 'koa' // Context是koa ctx 上下文的对应类型
import { getManager } from 'typeorm' // manager可以使得你可以对数据库进行增删改查

import { User } from '../entity' // User数据库表结构
import { encrypt, comparePassword } from '../utils/bcrypt' // 密码加密，对比密码
import { createToken } from '../utils/token' // 创建token
import { getOrderByStatus } from '../utils/getOrderByStatus' // 排序方式

const UserController = {
  // 注册
  async register(ctx: Context) {
    const { username, password } = ctx.request.body
    // Repository与Manger类似，但是Repository把操作限制在了某一具体的entity中
    // 以下等同于 getConnection().getRepository() or getRepository() 需要先引入, 参考 https://typeorm.io/#/working-with-repository
    const userRepository = getManager().getRepository(User)
    if (!!username && !!password) {
      // 两个参数都存在
      // 检测user是否存在
      const checkUser = await userRepository.findOne({ username })
      let res
      if (!!checkUser) {
        // 用户被查找到，说明已注册
        ctx.throw(400, '用户已被注册') // ctx.body结构。。？
      } else {
        const saltPassword = await encrypt(password) // 对密码进行加密
        // 新建一条新的数据
        // 这里create参数的校验规则，是要符合 entity/user 中的类型
        const newUser = userRepository.create({
          username,
          password: saltPassword,
          auth: 1
        })
        // user表插入这条数据
        await userRepository.save(newUser)
        res = {
          message: '注册成功'
        }
      }
      // http请求返回的内容
      ctx.body = res
    } else {
      ctx.throw(400, '用户名和密码不能为空')
    }
  },

  // 登录
  async login(ctx: Context) {
    const { username, password } = ctx.request.body
    const userRepository = getManager().getRepository(User)
    // 从数据库中查找当前username
    const user = await userRepository.findOne({ where: { username } })
    let res
    if (!user) {
      ctx.throw(400, '用户不存在')
    } else {
      // 对传入密码与数据库保存密码进行对比
      const isMath = await comparePassword(password, user.password)
      if (!isMath) {
        // 密码不匹配
        ctx.throw(400, '用户不存在')
      } else {
        const { id, auth } = user
        // 创建token
        const token = createToken({ username, id, auth })
        // http请求返回的data
        const data = {
          username,
          auth: user.auth,
          token,
          id
        }
        res = {
          message: '登录成功',
          data
        }
      }
    }
    ctx.body = res
  },

  // 获取用户列表
  async getList(ctx: Context) {
    const {
      page = 1,
      pageSize = 10,
      sortName = 'createAt',
      sortType,
      keyword
    } = ctx.query
    const userRepository = getManager().getRepository(User)
    // 该方法处理传入三个参数，返回一个对象，包含sortName以及sortType
    const orderByStatus = getOrderByStatus('user', sortName, sortType)
    // 数据库相关操作
    const users = await userRepository
      .createQueryBuilder('user') // Creates a query builder use to build SQL queries. 后面可以直接使用user
      .skip(pageSize * (page - 1)) // 分页，跳过前  pageSize * (page - 1) 个数据
      .take(pageSize) // 取的数量
      .select(['user.auth', 'user.id', 'user.createAt']) // select only some entity properties
      .where('user.auth != 2') // 查询条件
      .orderBy({
        [orderByStatus.sortName]: orderByStatus.sortType // 排序方式
      })
      .where('user.username like :username', {
        username: `%${!!keyword ? keyword : ''}`
      }) // username变量在后面参数中表示,like是SQL中的语法，进行模糊匹配
      .andWhere('user.auth like :auth', { auth: 1 }) // auth 1 普通用户
      .getManyAndCount() // getMany取得results, count取得总数
    ctx.body = {
      data: {
        list: users[0],
        total: users[1],
        current: Number(page)
      }
    }
  }
}

export default UserController
