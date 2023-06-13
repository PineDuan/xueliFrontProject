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
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index'),
    meta: {
      // 这个也可以直接给某个子路由进行设置，这时内部的子路由都需要认证，包括当前路由
      requiresAuth: true
    },
    children: [
      {
        path: 'home',
        alias: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */'@/views/home/index')
      },
      {
        path: 'role',
        name: 'role',
        component: () => import(/* webpackChunkName: 'role' */'@/views/role/index')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: 'user' */'@/views/user/index')
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: 'menu' */'@/views/menu/index')
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import(/* webpackChunkName: 'resource' */'@/views/resource/index')
      },
      {
        path: 'project_create',
        name: 'project_create',
        component: () => import('@/views/project-create/index')
      },
      {
        path: 'training_brief',
        name: 'training_brief',
        component: () => import('@/views/project-manage/brief')
      },
      {
        path: 'project_record',
        name: 'project_record',
        component: () => import('@/views/project-manage/record')
      },
      {
        path: 'display_area',
        name: 'display_area',
        component: () => import('@/views/project-manage/display_area')
      },
      {
        path: 'file_export',
        name: 'file_export',
        component: () => import('@/views/project-manage/file_export')
      },
      {
        path: 'forum',
        name: 'forum',
        component: () => import('@/views/project-manage/forum')
      },
      {
        path: 'live_broadcast',
        name: 'live_broadcast',
        component: () => import('@/views/project-manage/live_broadcast')
      },
      {
        path: 'train_staff',
        name: 'train_staff',
        component: () => import('@/views/project-manage/train_staff')
      },
      {
        path: 'trainer',
        name: 'trainer',
        component: () => import('@/views/project-manage/trainer')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/project-manage/video')
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/project-manage/message')
      },
      {
        path: 'teacher_resources',
        name: 'teacher_resources',
        component: () => import('@/views/user/teacher_resources')
      },
      {
        path: 'user_manage',
        name: 'user_manage',
        component: () => import('@/views/user/user_manage')
      },
      {
        path: 'log',
        name: 'log',
        component: () => import(/* webpackChunkName: 'advert' */'@/views/platform/log')
      },
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import(/* webpackChunkName: 'advert_space' */'@/views/platform/analysis')
      },
      {
        path: 'platform_message',
        name: 'platform_message',
        component: () => import(/* webpackChunkName: 'platform_message' */'@/views/platform/message')
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
