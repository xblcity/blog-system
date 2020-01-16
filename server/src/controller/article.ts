import { Context } from 'koa'
import { getManager } from 'typeorm'
import {
  Article,
  Tag
} from '../entity'
import { xorBy } from 'lodash'
import { getOrderByStatus } from '../utils/getOrderByStatus'

type TagItem = {
  value: string
}

const ArticleController = {
  async createArticle(
    ctx: Context
  ) {
    const {
      title,
      content,
      tags = []
    } = ctx.request.body
    const articleRepository = getManager().getRepository(
      Article
    )
    const tagRepository = getManager().getRepository(
      Tag
    )
    if (
      !!title &&
      !!content
    ) {
      let res
      // 当前文章标题是否存在
      const checkArticle = await articleRepository.findOne(
        { title }
      )
      if (!!checkArticle) {
        ctx.throw(
          400,
          '该文章已存在'
        )
      } else {
        const tagList: TagItem[] = tags.map(
          (t: string) => ({
            value: t
          })
        )
        const filterExistTag = await tagRepository.find(
          { where: tagList }
        )
        const tempTags = xorBy(
          tagList,
          filterExistTag,
          'value'
        )
        const tagsRes = await tagRepository.save(
          tempTags
        )

        const newArticle = articleRepository.create(
          {
            title,
            content,
            viewCount: 0,
            tags: !!tagList.length
              ? [
                  ...tagsRes,
                  ...filterExistTag
                ]
              : []
          }
        )
        await articleRepository.save(
          newArticle
        )
        res = {
          message:
            '创建文件成功'
        }
        ctx.body = res
      }
    } else {
      // 标题或者内容为空
      ctx.throw(
        400,
        '文章不符合规格'
      )
    }
  },

  // 获取文章列表
  async getArticleList(
    ctx: Context
  ) {
    const {
      page = 1,
      pageSize = 10,
      keyword,
      sortName = 'createAt',
      sortType,
      tag,
      justTitle,
      isContentLimit
    } = ctx.query
    const orderByStatus = getOrderByStatus(
      'article',
      sortName,
      sortType
    )
    const articleRepository = getManager().getRepository(
      Article
    )

    let filterProcess

    if (!!tag) {
      filterProcess = await articleRepository
        .createQueryBuilder(
          'article'
        )
        .innerJoinAndSelect(
          'article.tags',
          'tag',
          'tag.value = : value',
          {
            value: tag
          }
        )
    } else {
      filterProcess = await articleRepository
        .createQueryBuilder(
          'article'
        )
        .leftJoinAndSelect(
          'article.tags',
          'tag'
        )
    }
    const articleFilterProcess = await filterProcess
      .leftJoinAndSelect(
        'article.comments',
        'comment'
      )
      .leftJoinAndSelect(
        'comment.replies',
        'reply'
      )
      .where(
        'article.title like :title',
        {
          title: `%${
            !!keyword
              ? keyword
              : ''
          }`
        }
      )
      .orderBy({
        [orderByStatus.sortName]:
          orderByStatus.sortType
      })
      .skip(
        pageSize * (page - 1)
      )
      .take(pageSize)

    let articles
    if (justTitle) {
      articles = await articlesFilterProcess
        .select([
          'articles.id',
          'article.title',
          'article.viewCount',
          'article.createdAt'
        ])
        .getManyAndCount()
    } else {
      articles = await articleFilterProcess.getManyAndCount()
      if (isContentLimit) {
        articles[0].forEach(
          item => {
            item.count = item.content.slice(
              0,
              500
            )
          }
        )
      }
    }
    ctx.body = {
      data: {
        list: articles[0],
        total: articles[1],
        current: Number(page)
      }
    }
  }
}

export default ArticleController
