import { Context } from 'koa'
import { getManager } from 'typeorm'
import { Tag } from '../entity'

const TagController = {
  async getList(ctx: Context) {
    // 获取Tag这个数据库表
    const tagRepository = getManager().getRepository(Tag)
    const tagList = await tagRepository
      .createQueryBuilder('tag') // 查询tag，生成tag变量表示tag这张表
      .leftJoinAndSelect('tag.articles', 'article') // 联表查询
      .loadRelationCountAndMap('tag.count', 'tag.articles') // 这个不知道
      .select([
        // 要获取的当前表的哪几列数据
        'tag.id',
        'tag.value',
        'article.id',
        'article,title'
      ])
      .getMany() // 获取results列表
    ctx.body = {
      data: tagList
    }
  },

  async test(ctx: Context) {
    ctx.body = {
      message: '请求成功'
    }
  }
}

export default TagController
