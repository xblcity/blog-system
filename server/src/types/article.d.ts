export as namespace IArticle

export interface Item
  extends IBase.Item {
  id: number
  content: string
  title: string
  viewCount: number
  // 标签
  tags: ITag.Item[]
  // 评论列表
  comments: IComment.Item[]
}
