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

        <el-menu-item index="/home" v-if="hasPermissionStartsWith('project.create')">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="/platform_user_manage">
            <template slot="title">
                <i class="el-icon-user"></i>
                <span>平台用户管理</span>
            </template>
            <el-menu-item index="/platform_user_info">
                <i class="el-icon-search"></i><span>用户信息查询</span>
            </el-menu-item>
            <el-menu-item index="/platform_log_manage">
                <i class="el-icon-info"></i><span>日志管理</span>
            </el-menu-item>

        </el-submenu>

        <el-submenu index="/privileges" v-if="hasPermissionStartsWith('permission')">
            <template slot="title">
                <i class="el-icon-s-custom"></i>
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

        <el-submenu index="/platform_basic_data" v-if="hasPermissionStartsWith('permission')">
            <template slot="title">
                <i class="el-icon-setting"></i>
                <span>基础数据</span>
            </template>
            <el-menu-item index="/college">
                <i class="el-icon-document"></i><span>二级学院</span>
            </el-menu-item>
            <el-menu-item index="/teaching_point">
                <i class="el-icon-document"></i><span>教学点</span>
            </el-menu-item>
        </el-submenu>

        <el-menu-item index="/enrollment_plan" v-if="hasPermissionStartsWith('project.create')">
            <i class="el-icon-folder-add"></i>
            <span slot="title">招生计划</span>
        </el-menu-item>

        <el-submenu index="/freshman_management" v-if="hasPermissionStartsWith('project.manage')">
            <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>新生管理</span>
            </template>
            <el-menu-item index="/freshman_data_import">
                <i class="el-icon-document"></i><span>新生信息导入、查询\录取通知书打印</span>
            </el-menu-item>
            <el-menu-item index="/offer_letter_template">
                <i class="el-icon-document"></i><span>录取通知书模板设置</span>
            </el-menu-item>
            <el-menu-item index="/freshman_data_analysis">
                <i class="el-icon-document"></i><span>数据统计分析</span>
            </el-menu-item>
        </el-submenu>

        <el-submenu index="/add_new_class_management" v-if="hasPermissionStartsWith('project.manage')">
            <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>开班管理</span>
            </template>
            <el-menu-item index="/new_class_search">
                <i class="el-icon-document"></i><span>开班信息导出、查询</span>
            </el-menu-item>
            <el-menu-item index="/new_class_import_check">
                <i class="el-icon-document"></i><span>开班信息审批、导入</span>
            </el-menu-item>
            <el-menu-item index="/standard_class_search">
                <i class="el-icon-document"></i><span>班级信息查询、修改、导出</span>
            </el-menu-item>

        </el-submenu>

        <el-submenu index="/student_info_search" v-if="hasPermissionStartsWith('project.manage')">
            <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>学生信息查询</span>
            </template>
            <el-menu-item index="/registered_student_search">
                <i class="el-icon-document"></i><span>在籍学生查询、导出</span>
            </el-menu-item>
            <el-menu-item index="/payment_information_inquiry">
                <i class="el-icon-document"></i><span>缴费信息查询、导出</span>
            </el-menu-item>
            <el-menu-item index="/score_information_query">
                <i class="el-icon-document"></i><span>成绩信息查询、导出</span>
            </el-menu-item>
            <el-menu-item index="/degree_information_inquiry">
                <i class="el-icon-document"></i><span>学位信息查询、导出</span>
            </el-menu-item>

        </el-submenu>

        <el-submenu index="/teaching_management" v-if="hasPermissionStartsWith('project.user')">
            <template slot="title">
                <i class="el-icon-user"></i>
                <span>教学管理</span>
            </template>
            <el-menu-item index="/talent_development_plan">
                <i class="el-icon-document"></i><span>人才培养方案导入、查询、导出</span>
            </el-menu-item>

            <el-submenu index="/class_information_management">
          <template slot="title">班级信息管理</template>
          <el-menu-item index="/class_information_query">班级信息查询、导出</el-menu-item>
          <el-menu-item index="/teaching_class">教学班级导入、修改、查询、导出</el-menu-item>
        </el-submenu>

        <el-submenu index="/teaching_plan">
          <template slot="title">教学计划管理</template>
          <el-menu-item index="/teaching_plan_application">教学计划申请，包含必修课、选修课</el-menu-item>
          <el-menu-item index="/schedule">排课表导入、排课表查询、导出</el-menu-item>
          <el-menu-item index="/teaching_plan_query">教学计划查询、导出</el-menu-item>
          <el-menu-item index="/student_course_selection_information">学生选课信息查询、导出</el-menu-item>
          <el-menu-item index="/recently_started_classes">近期开课班级查询、导出</el-menu-item>
          <el-menu-item index="/recently_started_class_students">近期开课学生查询、导出</el-menu-item>
        </el-submenu>

        <el-submenu index="/online_teaching_management" v-if="hasPermissionStartsWith('project.user')">
            <template slot="title">
                <i class="el-icon-user"></i>
                <span>在线教学管理</span>
            </template>
            <el-menu-item index="/online_teaching_info_view">
                <i class="el-icon-document"></i><span>查看在线课程信息</span>
            </el-menu-item>
            <el-menu-item index="/online_teaching_tour">
                <!-- 让管理人员可以在线巡视各个直播在线课程 -->
                <i class="el-icon-document"></i><span>在线巡课</span>
            </el-menu-item>

            <el-menu-item index="/student_online_learning_records">
                <!-- 展示学生的在线学习数据，比如直播间逗留时间、平台逗留时间等等 -->
                <i class="el-icon-document"></i><span>学生在线学习记录</span>
            </el-menu-item>

            <el-menu-item index="/teachers_teaching_records">
                <i class="el-icon-document"></i><span>教师授课记录</span>
            </el-menu-item>
        </el-submenu>
        </el-submenu>

        <el-submenu index="/transaction_management" v-if="hasPermissionStartsWith('project.platform')">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>事务管理</span>
            </template>
            <el-menu-item index="/class_application">
                <i class="el-icon-document"></i><span>开班申请</span>
            </el-menu-item>
            <el-menu-item index="/check_new_students_change_majors">
                <i class="el-icon-document"></i><span>新生转专业审批、查询</span>
            </el-menu-item>
            <el-menu-item index="/suspension_approval">
                <i class="el-icon-document"></i><span>休学审批、查询</span>
            </el-menu-item>
            <el-menu-item index="/re-entry_examination_approval">
                <i class="el-icon-document"></i><span>复学审批、查询</span>
            </el-menu-item>
            <el-menu-item index="/withdrawal_approval">
                <i class="el-icon-document"></i><span>退学审批、查询</span>
            </el-menu-item>

            <el-menu-item index="/check_senior_students_change_majors">
                <i class="el-icon-document"></i><span>老生转专业审批、查询</span>
            </el-menu-item>
            <el-menu-item index="/student_exemption_approval">
                <i class="el-icon-document"></i><span>学生免修审批、查询</span>
            </el-menu-item>
            <el-menu-item index="/student_retake_approval">
                <i class="el-icon-document"></i><span>学生重修审批、查询</span>
            </el-menu-item>
            <el-menu-item index="/degree_approval">
                <i class="el-icon-document"></i><span>学位审批、查询</span>
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
      return true
    //   return this.permissionList.includes(permissionName)
    },
    hasPermissionStartsWith (prefix) {
      return true
      // return this.permissionList.some(permission => permission.startsWith(prefix))
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
