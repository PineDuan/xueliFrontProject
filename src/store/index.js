import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用于登录成功后 保存用户信息(初始值尝试读取本地存储)
    // JSON.parse 将本地存储的字符串信息转换为 对象 Object
    user: JSON.parse(window.localStorage.getItem('user_scnu')) || null,

    // 测试数据 用来模拟后台
    login_return: { data: { code: 200, msg: '成功登录', userInfo: '234214121234ADDF' } }
  },
  getters: {
  },
  mutations: {
    // 存储用户数据
    setUser (state, payload) {
      // 将 payload 转换为对象后再存储
      state.user = payload
      //  将 payload 数据添加到本地存储中
      // JSON.stringify 将对象转换为 JSON 字符串，然后存储到本地内存中
      window.localStorage.setItem('user_scnu', JSON.stringify(payload))
      console.log(JSON.parse(window.localStorage.getItem('user_scnu')))
    }
  },
  actions: {
  },
  modules: {
  }
})
