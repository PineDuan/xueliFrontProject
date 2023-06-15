<template>
    <div class="login">
      <el-tag
    type="success"
    effect="plain">
    华南师范大学非学历教育服务平台
  </el-tag>
        <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px"
        label-position="top"
        >
          <el-form-item
          label="用户名"
          prop="username"
          >
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item
          label="密码"
          prop="password"
          >
            <el-input
            v-model="form.password"
            type="password"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
            type="primary"
            :loading="isLoading"
            @click="onSubmit"
            >登录</el-button>

          </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import request from '@/utils/request'
// import qs from 'qs'
// 引入封装的接口功能组件
import { login } from '@/services/user'

export default {
  name: 'ScnuFrontTest01Index',

  data () {
    return {
      // 存储表单数据的对象
      form: {
        username: '',
        password: ''
      },
      // 用于设置表单校验规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]{1,15}$/, message: '请输入合法的用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '请输入密码，长度为 6 到 18 位', trigger: 'blur' }
        ]
      },
      // 用于保存加载状态
      isLoading: false
    }
  },

  mounted () {

  },

  methods: {
    // 登录功能
    async onSubmit () {
      try {
        // 设置校验成功后的功能(请求发送)
        await this.$refs.form.validate()
        // 发送请求
        this.isLoading = true
        const { data } = await login(this.form)

        this.isLoading = false
        // 响应处理
        if (data.code === 200) {
          // Element 的消息提示组件 3 秒后消失
          this.$message.success(data.msg)
          // 将用户信息存储到 vuex 中
          console.log(data.userInfo)
          console.log(data.userInfo.saTokenInfo)
          this.$store.commit('setUser', data.userInfo)

          // 根据可能存储到 redirect 数据进行跳转设置
          this.$router.push(this.$route.query.redirect || '/')
          // this.$router.push({
          //   name: 'home'
          // })
        } else {
          this.$message.error(data.msg)
        }
      } catch (err) {
        console.log(err)
        // 设置校验失败后的功能(提示)
        console.log('没有校验通过')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;

  // 设置内部元素垂直水平居中
  justify-content: center;
  align-items: center;

  .el-tag{
    margin-bottom: 30px;
    display: flex;
    font-size: 40px;
    background: none;
    height: 50px;
    border: none;
    color: #000;
    font-weight: 400; // 设置为粗体
  }

  .el-form {
    background-color: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 10px;

    .el-button{
      width: 100%;
    }
  }
}
</style>
