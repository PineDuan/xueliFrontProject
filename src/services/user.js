// 封装各个模块的请求
// import request from '@/utils/request'
// import qs from 'qs'
// 引入 Vuex 的数据
import store from '@/store'

// 用户登录接口
export const login = data => {
  // return request({
  //   method: 'POST',
  //   // headers: { 'content-type': 'application/x-www-form-urlencoded'},
  //   url: 'user/doLogin1',
  //   // urlencoded 格式：名=值&名=值
  //   // data: {
  //   //   username: this.form.username,
  //   //   password: this.form.password
  //   // }
  //   data: qs.stringify(data)
  // })
  return store.state.login_return
}

// 用户基本信息接口
export const getUserInfo = () => {
  // return request({
  //   method: 'GET',
  //   url: 'user/getUserInfo'
  //   // headers: {
  //   //   [store.state.user.tokenName]:
  //   //   JSON.parse(window.localStorage.getItem('user_scnu')) ||
  //   //   store.state.user.tokenValue
  //   // }
  // })
  return store.state.login_return
}
