import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入 store
import store from '@/store'

// 引入路由中需要使用的组件功能
// import Login from '@/views/login/index'
// import Layout from '@/views/layout/index'
// import Home from '@/views/home/index'
// import Role from '@/views/role/index'
// import Menu from '@/views/menu/index'
// import Resource from '@/views/resource/index'
// import Course from '@/views/project-create/index'
// import User from '@/views/user/index'
// import Advert from '@/views/advert/index'
// import AdvertSpace from '@/views/advert-space/index'
// import ErrorPage from '@/views/error-page/index'
// 采用懒加载组件来优化路由

Vue.use(VueRouter)

// 路由规则（添加需要认证的 requiresAuth 信息）
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'back_manage_index' */'@/views/back_manage/index'),
    meta: {
      // 这个也可以直接给某个子路由进行设置，这时内部的子路由都需要认证，包括当前路由
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        alias: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */'@/views/back_manage/home')
      },
      {
        path: 'platform_user_info',
        name: 'platform_user_info',
        component: () => import(/* webpackChunkName: 'platform_user_info' */'@/views/back_manage/platform_user_manage/platform_user_info')
      },
      {
        path: 'platform_log_manage',
        name: 'platform_log_manage',
        component: () => import(/* webpackChunkName: 'platform_log_manage' */'@/views/back_manage/platform_user_manage/platform_user_log')
      }
    ]
  },
  {
    path: '/student',
    component: () => import(/* webpackChunkName: 'student_index' */'@/views/student/home'),
    meta: {
      // 这个也可以直接给某个子路由进行设置，这时内部的子路由都需要认证，包括当前路由
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        alias: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'student_home' */'@/views/student/index')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: 'student_detail' */'@/views/student/detail')
      },
      {
        path: 'plan',
        name: 'plan',
        component: () => import(/* webpackChunkName: 'student_plan' */'@/views/student/plan')
      }
    ]
  },
  {
    path: '/lecturer',
    component: () => import(/* webpackChunkName: 'lecturer_index' */'@/views/lecturer/index'),
    meta: {
      // 这个也可以直接给某个子路由进行设置，这时内部的子路由都需要认证，包括当前路由
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        alias: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'lecturer_home' */'@/views/lecturer/index')
      }
    ]
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: 'error-page' */'@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})

// 使用导航守卫来检测路由是否能继续跳转
router.beforeEach((to, from, next) => {
  // 验证 to 路由是否需要进行身份认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not redirect to login page
    // 验证 Vuex 的 store 中的登录用户信息是否存储
    // console.log(store.state.user)
    console.log('权限通过')
    if (!store.state.user) {
      // 未登录，跳转到登录页
      return next({
        name: 'login',
        query: {
          // 将本次路由的 fullPath 传递给 login 页面
          redirect: to.fullPath
        }
      })
    }
    // 已经登录允许通过
    next()
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
