import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Reply, Comment } from './index'
import BaseEntity from './base'

@Entity()
class User extends BaseEntity implements IUser.Item {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 50 })
  username: string

  @Column({ type: 'varchar', length: 255 })
  password: string

  @Column({ type: 'tinyint', width: 4 })
  auth: 1 | 2

  // where A contains multiple instances of B, but B contains only one instance of A
  // A 包含多个 B 的实例， 但是 B 只包含 A的一个实例
  @OneToMany(
    () => Comment, // 一个user对应多个Comment
    comment => comment.user // 一个comment对应一个user
  )
  comments: Comment[] // comment的类型是一个数组，元素类型是Comment

  @OneToMany(
    () => Reply, // 一个user对应多个Reply
    reply => reply.replyUser // 一个replay只对应一个replyUser
  )
  replies: Reply[]
}

export default User