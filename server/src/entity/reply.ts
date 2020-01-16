import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import BaseEntity from './base'
import { User, Comment } from './index'

// 使用基类，createAt updateAt
@Entity()
class Reply extends BaseEntity implements IReply.Item {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  content: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  targetUsername: string

  @ManyToOne(
    () => User, // 多个reply对应一个 User
    user => user.replies, // 这里的参数user即是上面的 User Entity
    { onDelete: 'CASCADE' }
  )
  replyUser: User

  @ManyToOne(
    () => Comment,
    comment => comment.replies,
    { onDelete: 'CASCADE' }
  )
  comment: Comment
}

export default Reply
