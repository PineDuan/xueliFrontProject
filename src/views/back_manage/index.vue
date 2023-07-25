<template>
    <el-container>
        <el-aside>
            <!-- 侧边栏组件 -->
            <!-- 不区分大小写 所以只能写 - -->
            <app-aside></app-aside>
        </el-aside>
        <el-container>
            <el-header>
                <!-- 头部组件 -->
                <app-header></app-header>
            </el-header>
            <el-main>
                <!-- 设置子路由的出口 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
    </template>

<script>
// 引入侧边栏组件
import AppAside from './components/AppAside'
import AppHeader from './components/AppHeader'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    AppAside,
    AppHeader
  }
}
</script>

    <style lang="scss" scoped>
    .el-container {
        height: 100vh;
        // min-width: 980px;
      }

      .el-aside {
        background-color: #fff;
      }

      .el-header {
        background-color: #fff;
      }

      .el-main {
        background-color: #e9eef3;
      }
    </style>
