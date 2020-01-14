import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'

import { Article } from './index'

// 不需要使用基类，不需要创建时间与修改时间
@Entity()
class Tag implements ITag.Item {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 100, unique: true })
  value: string

  @ManyToMany(
    () => Article,
    article => article.tags
  )
  articles: Article[]
}

export default Tag