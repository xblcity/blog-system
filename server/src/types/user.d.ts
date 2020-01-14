export as namespace IUser

export interface Item extends IBase.Item {
  id: number
  username: string
  password: string
  // 权限
  auth: 1 | 2
  // 对应评论
  comments: IComment.Item[] // comments类型是个数组，每个元素的类型符合IComment.Item
}