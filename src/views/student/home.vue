<template>
  <!-- 设置子路由的出口 -->
  <router-view></router-view>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {}
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
