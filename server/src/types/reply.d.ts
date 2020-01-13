export as namespace IReply

export interface Item extends IBase.Item {
  id: number
  content: string
  // 目标用户名
  targetUsername?: string
  // 回复用户
  replyUser?: IUser.Item
  // 在某个评论下
  comment?: IComment.Item
}