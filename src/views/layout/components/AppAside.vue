<template>
<div class="el-aside">
    <!-- background-color="#545c64" -->
    <el-menu default-active="2"
    class="el-menu-vertical-demo"
    background-color="#242348"
    text-color="#fff"
    active-text-color="#ff9b72"
    unique-opened router>
        <el-menu-item index="/" class="logo">
            <img src="@/assets/logo_gdou.png" alt="">
        </el-menu-item>
        <el-menu-item index="/home">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="/privileges" v-if="hasPermissionStartsWith('permission')">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>权限管理</span>
            </template>
            <el-menu-item index="/role">
                <i class="el-icon-document"></i><span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="/menu">
                <i class="el-icon-document"></i><span>菜单列表</span>
            </el-menu-item>
            <el-menu-item index="/resource">
                <i class="el-icon-document"></i><span>资源列表</span>
            </el-menu-item>
        </el-submenu>
        <el-menu-item index="/project_create" v-if="hasPermissionStartsWith('project.create')">
            <i class="el-icon-folder-add"></i>
            <span slot="title">项目创建</span>
        </el-menu-item>
        <el-submenu index="/project_manage" v-if="hasPermissionStartsWith('project.manage')">
            <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>项目管理</span>
            </template>
            <el-menu-item index="/training_brief">
                <i class="el-icon-document"></i><span>培训概要</span>
            </el-menu-item>
            <el-menu-item index="/project_record">
                <i class="el-icon-document"></i><span>培训记录</span>
            </el-menu-item>
            <el-menu-item index="/train_staff">
                <i class="el-icon-document"></i><span>培训学员管理</span>
            </el-menu-item>
            <el-menu-item index="/trainer">
                <i class="el-icon-document"></i><span>培训教师管理</span>
            </el-menu-item>
            <el-menu-item index="/live_broadcast">
                <i class="el-icon-document"></i><span>直播管理</span>
            </el-menu-item>

            <el-menu-item index="/video">
                <i class="el-icon-document"></i><span>点播管理</span>
            </el-menu-item>
            <el-menu-item index="/file_export">
                <i class="el-icon-document"></i><span>项目资料导出</span>
            </el-menu-item>
            <el-menu-item index="/forum">
                <i class="el-icon-document"></i><span>项目讨论区管理</span>
            </el-menu-item>
            <el-menu-item index="/display_area">
                <i class="el-icon-document"></i><span>成果展示区管理</span>
            </el-menu-item>
            <el-menu-item index="/message">
                <i class="el-icon-chat-line-square"></i><span>消息管理</span>
            </el-menu-item>

            <el-menu-item index="/video">
                <i class="el-icon-document"></i><span>新增节点1</span>
            </el-menu-item>
            <el-menu-item index="/file_export">
                <i class="el-icon-document"></i><span>新增节点2</span>
            </el-menu-item>
            <el-menu-item index="/forum">
                <i class="el-icon-document"></i><span>新增节点3</span>
            </el-menu-item>
            <el-menu-item index="/display_area">
                <i class="el-icon-document"></i><span>新增节点4</span>
            </el-menu-item>
            <el-menu-item index="/message">
                <i class="el-icon-chat-line-square"></i><span>新增节点5</span>
            </el-menu-item>
            <el-menu-item index="/display_area">
                <i class="el-icon-document"></i><span>新增节点4</span>
            </el-menu-item>
            <el-menu-item index="/message">
                <i class="el-icon-chat-line-square"></i><span>新增节点5</span>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="/user" v-if="hasPermissionStartsWith('project.user')">
            <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户管理</span>
            </template>
            <el-menu-item index="/teacher_resources">
                <i class="el-icon-document"></i><span>师资库</span>
            </el-menu-item>
            <el-menu-item index="/user_manage">
                <i class="el-icon-document"></i><span>平台管理人员管理</span>
            </el-menu-item>
        </el-submenu>
        <el-submenu index="/platform" v-if="hasPermissionStartsWith('project.platform')">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>平台管理</span>
            </template>
            <el-menu-item index="/log">
                <i class="el-icon-document"></i><span>平台日志</span>
            </el-menu-item>
            <el-menu-item index="/analysis">
                <i class="el-icon-document"></i><span>统计分析</span>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
  name: 'AppAside',
  computed: {
    permissionList () {
      return this.$store.state.user.permissionList
    }
  },
  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {
    hasPermission (permissionName) {
      return this.permissionList.includes(permissionName)
    },
    hasPermissionStartsWith (prefix) {
      return this.permissionList.some(permission => permission.startsWith(prefix))
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
    height: 100%;
    width: 300px;
    .el-menu {
        height: 100%;
        border-right: 0 none;

        span {
            font-size: 18px;
        }
        .logo{
            height: 90px;
        }
    }
}
</style>
