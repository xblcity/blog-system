import { message } from 'antd'
import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'

import { baseUrls } from '@constants/index'

type Request = (url: string, data?: object, baseUrl?: string) => Promise<any>

interface HttpRequest {
  get?: Request
  post?: Request
  delete?: Request
  put?: Request
}

type Method = 'get' | 'post' | 'delete' | 'put'
const methods: Method[] = ['get', 'post', 'delete', 'put']
const http: HttpRequest = {}
const appEnv: string = process.env.NODE_ENV

const DEFAULTBASEURL = {
  baseURL: baseUrls[appEnv].BASE_URL
}

methods.forEach(v => {
  http[v] = (url: string, data: any, baseUrl?: string) => {
    const config: AxiosRequestConfig = {
      url,
      method: v,
      baseURL: baseUrl || DEFAULTBASEURL.baseURL
    }
    const instance = axios.create(DEFAULTBASEURL)
    // 请求拦截器
    instance.interceptors.request.use(
      config => {
        // 可以子啊这这添加请求头
        const token = localStorage.getItem('token')
        if (!!token) {
          config.headers.common['Authorization'] = 'Bearer ' + token
        }
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
    // 结果拦截器
    instance.interceptors.response.use(
      res => {
        if (res && res.data) {
          return res.data
        }
        return res
      },
      error => {
        return Promise.reject(error)
      }
    )
    if (v === 'get' || v === 'delete') {
      config.params = data
    } else {
      config.data = qs.stringify(data)
    }
    return instance
      .request(config)
      .then(res => {
        return res
      })
      .catch(err => {
        // 错误集中处理
        message.destroy()
        if (!!err.response) {
          const errData = err.response.data
          message.error(errData.message)
        } else {
          const msg = err.message === 'Network Error'
          message.error(msg)
        }
        return Promise.reject(err)
      })
  }
})

export default http
