import axios from 'axios'
// 引入 vuex 的数据
import store from '@/store'
// 引入 Element UI 中的 Message 提示
import { Message } from 'element-ui'

import router from '@/router'

// create  创建 axios 实例
const request = axios.create({
  timeout: 20000
//   baseURL: 'http://localhost:8086/'
})

function getBaseURL (url) {
  console.log(url)
  return 'http://localhost:8086/'
}

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 判断 config.url 的前缀，来进行请求 baseURL 的设置
  config.baseURL = getBaseURL(config.url)

  // 统一设置 Token 信息
  const { user } = store.state
  if (user && user.saTokenInfo && user.saTokenInfo.tokenValue) {
    config.headers[user.saTokenInfo.tokenName] = user.saTokenInfo.tokenValue
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 状态码 2XX 会执行这里
  const { code } = response.data
  console.log(response)
  let errorMessage = ''
  if (code === 400) {
    errorMessage = '请求参数错误'
  } else if (code === 401) {
    errorMessage = 'Token 无效'
    // 跳转到登录页面
    router.push({ name: 'login' })
  } else if (code === 403) {
    errorMessage = '没有权限，请联系管理员'
  } else if (code === 404) {
    errorMessage = '请求资源不存在'
  } else if (code >= 500) {
    errorMessage = '服务端错误，请联系管理员'
  } else {
    return response
  }
  // console.log(errorMessage)
  Message.error(errorMessage)
  return response
}, function (error) {
  console.dir(error)
  if (error.response) {
    // 请求发送成功，响应接收完毕，但状态码为失败的情况
    // 1.判断失败的状态码（主要处理 401 的情况）
    const { status } = error.response
    let errorMessage = ''
    if (status === 400) {
      errorMessage = '请求参数错误'
    } else if (status === 401) {
      errorMessage = 'Token 无效'
    } else if (status === 403) {
      errorMessage = '没有权限，请联系管理员'
    } else if (status === 404) {
      errorMessage = '请求资源不存在'
    } else if (status >= 500) {
      errorMessage = '服务端错误，请联系管理员'
    }
    // console.log(errorMessage)
    Message.error(errorMessage)
  } else if (error.request) {
    // 请求发送成功，但是未收到响应
    Message.error('请求超时，请重试')
  } else {
    // 意料之外的错误
    if (error.message === 'Network Error') {
      Message.error('网络错误，请检查你的网络连接')
    } else {
      Message.error(error.message)
    }
  }
  // 利用下面的打印语句能看到具体的错误信息
  // console.dir(error)
  // return Promise.reject(error)
  return Promise.resolve()
})

export default request
