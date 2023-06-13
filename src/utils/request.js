import axios from 'axios'
// 引入 vuex 的数据
import store from '@/store'

// create  创建 axios 实例
const request = axios.create({
  timeout: 20000
//   baseURL: 'http://localhost:8085/'
})

function getBaseURL (url) {
  console.log(url)
  return 'http://localhost:8085/'
}

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 判断 config.url 的前缀，来进行请求 baseURL 的设置
  config.baseURL = getBaseURL(config.url)

  // 统一设置 Token 信息
  const { user } = store.state
  if (user && user.tokenValue) {
    config.headers[user.tokenName] = user.tokenValue
  }
  return config
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 状态码 2XX 会执行这里

  return response
}, function (error) {
  // 利用下面的打印语句能看到具体的错误信息
  console.dir(error)
  return Promise.reject(error)
})

export default request
