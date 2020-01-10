import { Context } from 'koa'
import { getManager } from 'typeorm'
import User from '../entity/user'

class TestController {
  async test(ctx: Context) {
    ctx.body = { data: '你好' }
  }
  // 注册
  async register(ctx: Context) {
    const { username, password } = ctx.request.body
    const userRepository = getManager().getRepository(User)
    await userRepository.save({ username, password })
    ctx.body = { message: '注册成功' }
  }
  // 登录
  async login(ctx: Context) {
    const { username, password } = ctx.request.body
    const useRepository = getManager().getRepository(User)
    const targetUser = await useRepository.findOne({ where: { username } })

    let res

    if (targetUser.password === password) {
      res = { data: targetUser, message: '登陆成功' }
    } else {
      res = { message: '密码错误' }
    }
    ctx.body = res
  }
}

export default new TestController()