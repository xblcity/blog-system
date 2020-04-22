import marked from 'marked'
import hljs from 'highlight'
import { filterXSS } from 'xss'
import { message } from 'antd'

/**
 * markdown转换html
 * @param text {}
 * @param isGuardXss {}
 */
export const markdownToHtml = (text: string, isGuardXss = false) => {
  return marked(isGuardXss ? filterXSS(text) : text, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: (code: string) => {
      return hljs.highlightAuto(code).value
    }
  })
}

/**
 * 查询参数
 * @param value {string}
 */
export const decodeQuery = (value: string) => {
  const params: PlainObj = {}
  const paramsStr = value.replace(/\.*\?/, '')
  paramsStr.split('&').forEach(v => {
    const d = v.split('=')
    params[d[0]] = d[1]
  })
  return params
}

export const getTagColor = (
  tagList: ITagStore.TagItem[],
  tags: { id: number; value: string }[]
) => {
  const list: ITagStore.TagItem[] = []
  tagList.forEach(item => {
    tags.forEach(v => {
      if (v.id === item.id) {
        list.push(item)
      }
    })
  })
  return list
}

// 获取屏幕宽度
export const getWindowWidth = () => {
  return document.querySelector('body').clientWidth
}
