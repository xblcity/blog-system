export as namespace ITag

export interface Item {
  id: number
  // 值/内容
  value: string
  // 对应文章列表
  articles: IArticle.Item[]
}