import React from 'react'
import { Avatar, Divider, Icon as AntdIcon, Rate } from 'antd'

import styles from './index.scss'
// import Icon from '@components/Icon'

const skillList: { title: string; rate: number }[] = [
  {
    title: 'HTML, CSS, JavaScript: 熟练开发符合W3C标准页面，熟练使用ES6语法',
    rate: 3
  },
  {
    title:
      'React: 熟练使用React及其技术栈并有相关工作经验，熟练使用最新的Hooks',
    rate: 3
  },
  {
    title: 'Vue: 了解Vue相关知识点并有相关工作经验',
    rate: 2
  },
  {
    title: 'Webpack: 能够从零配置React开发环境并应用与优化。',
    rate: 3
  },
  {
    title: 'TypeScript: 掌握TypeScript通常用法，并运用与实际开发中',
    rate: 2
  }
]

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.header}>
        <Avatar src={require('@assets/avatar.png').default} />
        <div className={styles.desc}>一个进击的前端</div>
      </div>
      <Divider orientation="left">博客简述</Divider>
      <div>
        <p>前端：TypeScript + React + antd</p>
        <p>后端：TypeScript + Koa + TypeORM + MySQL</p>
        <p>
          源码地址：
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/xblcity/blog-system"
          >
            github
          </a>
          ，仅供学习使用，不做商业用途
        </p>
      </div>
      <Divider orientation="left">关于我</Divider>
      <ul className={styles.myInfo}>
        <li>姓名：小白龙</li>
        <li>
          联系方式：
          <AntdIcon style={{ marginRight: 6 }} type="mail" />
          <a href="mailto:hyaxie@163.com">hyaxie@163.com</a>
        </li>
        <li>地址：苏州市</li>
        <li>
          <div className={styles.otherBlogAddress}>
            其他博客地址：
            {/* <Icon
              width={16}
              height={16}
              id="jianshu"
              className={styles.linkIcon}
            /> */}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://blog.xblcity.com"
            >
              blog
            </a>
          </div>
        </li>
        <li>
          技能：
          <ul>
            {skillList.map((item, i) => (
              <li key={i}>
                {item.title}
                <Rate
                  className={styles.rate}
                  defaultValue={item.rate}
                  disabled
                />
              </li>
            ))}
          </ul>
        </li>
        <li>个人：喜爱代码，动漫，电影，跑步~</li>
      </ul>
    </div>
  )
}

export default AboutMe
