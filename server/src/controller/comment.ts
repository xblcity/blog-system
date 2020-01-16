import { Context } from 'koa'
import { getManager } from 'typeorm'
import { Article, Comment, User } from '../entity'

const CommentController = {
  async createComment(ctx: Context) {
    const { articleId, content, userId } = ctx.body
    const articleRepository = getManager().getRepository(Article) // article entity
    const commentRepository = getManager().getRepository(Comment) // comment entity
    const userRepository = getManager().getRepository(User) // user entity
    // 查询文章的一条数据
    const targetArticle = await articleRepository.findOne({
      where: { id: articleId },
      relations: ['comments']
    })
    // 查询用户的一条数据
    const targetUser = await userRepository.findOne({
      where: { id: userId },
      // relations 关系需要加载主体
      relations: ['comments']
    })
    // 创建comment
    const newComment = commentRepository.create({
      content
    })
    // 存储comment
    await commentRepository.save(newComment)
    // 将评论存储到文章和用户中去
    targetArticle.comments = [...targetArticle.comments, newComment]
    targetUser.comments = [...targetUser.comments, newComment]
    await userRepository.save(targetUser)
    await articleRepository.save(targetArticle)
    // 查找最新评论发回去
    const resComment = await commentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.replies', 'reply')
      .leftJoinAndSelect('comment.user', 'user')
      .where('comment.id like :id', { id: newComment.id })
      .select([
        'comment.createAt',
        'comment.id',
        'comment.content',
        'reply.createdAt',
        'reply.id',
        'reply.content',
        'reply.targetUsername',
        'user.id',
        'user.username'
      ])
      .getOne()
    ctx.body = { data: resComment }
  },
  // 删除评论
  async deleteComment(ctx: Context) {
    const { id } = ctx.query
    const commentRepository = getManager().getRepository(Comment)
    await commentRepository.delete({ id })
    ctx.body = { message: '删除成功' }
  }
}

export default CommentController
