export as namespace IComment

export interface Item extends IBase.Item {
  id: number
  // 评论的内容
  content: string
  // 评论对应文章
  article: IArticle.Item
  // 评论对应用户
  user: IUser.Item
}
