<template>
<div class="app-header">
    <!-- 左侧面包屑导航 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">权限管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
    </el-breadcrumb>
    <i class="el-icon-bell" @click="messageList"></i>
    <!-- 右侧用户信息展示 -->
    <el-dropdown>
        <span class="el-dropdown-link">
          <!-- 用户头像 -->
          <el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <!-- 给 click 点击事件设置为 native 让其具有原生 dom 元素的点击效果，
        Vue 的组件默认是需要自定义事件触发的
        -->
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item
            divided
            @click.native="handleLogout"
            >退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
</template>

<script>
// 引入用户信息接口功能
import { getUserInfo } from '@/services/user'

export default {
  name: 'AppHeader',
  data () {
    return {
      squareUrl: '/avatar.jpg',
      // 用户信息
      userInfo: {}
    }
  },
  created () {
    // 加载用户信息
    this.loadUserInfo()
  },
  methods: {
    // 加载用户信息
    async loadUserInfo () {
      const data = await getUserInfo()
      console.log(data)
    },
    // 退出功能
    handleLogout () {
      this.$confirm('确认退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // console.log('点击提出')
      // 1.清除 store 用户信息
        this.$store.commit('setUser', null)
        // 2.跳转到登录页
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    // 打开消息列表页
    messageList () {
      console.log('打开消息列表')
      this.$router.push('/platform_message')
    }
  }

}
</script>

<style lang="scss" scoped>
.app-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-dropdown-menu {
      display: flex;
      align-items: center;
    }

    .el-icon-bell {
    /* 添加以下样式 */
    margin-left: auto;
    padding-right: 10px;
    font-size: 25px; /* 调整图标大小为 20px */
    /* 添加以下样式 */
    transition: color 0.3s; /* 添加过渡效果 */
  }
  .el-icon-bell:hover {
    color: #f9c094; /* 设置鼠标悬停状态下的颜色 */
  }
}
</style>
