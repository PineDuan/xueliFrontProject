<template>
<div id="app">
    <!-- <h1>华师继续教育</h1> -->
    <!-- 根路由的出口 -->
    <router-view />

    <!-- 测试 Element 是否可用 -->
    <!-- <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
    </el-row> -->

</div>
</template>

<script>
// import request from '@/utils/request'
// request({
//   method: 'GET',
//   url: 'http://localhost:8085/user/all'
// }).then(res => {
//   console.log(res)
// })

export default {
  name: 'APP'
}

</script>

<style lang="scss">
// 通过在 vue.config.js 全局配置文件中配置 scss 就可以在全局使用了 不需要再引入了
  // div {
  //   background-color: $success-color;
  // }
</style>
