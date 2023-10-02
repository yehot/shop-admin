 import {
  createRouter,
  createWebHashHistory,
 } from 'vue-router'

 // 1. 定义路由组件（可以是一个页面，也可以是一个 View）
import Index from "~/pages/index.vue"
import About from "~/pages/about.vue"
import NotFound from "~/pages/404.vue"
import Login from "~/pages/login.vue"
 import Admin from "~/layout/admin.vue";

// 2. 定义一些路由
const routes = [
  {
    path: '/',
    component: Admin,
    meta: {
      title: "后台首页"
    },
    // 子路由并不是完整的页面，也只是一个 View
    // children: [
    //   {
    //     path: '/',
    //     component: Index,
    //     meta:{
    //       title:"首页"
    //     }
    //   },
    // ]
  },
  {
    path: '/login',
    component: Login,
    meta:{
      title:"登录页"
    }
  },
  {
    path: '/about',
    component: About
  },
  {
    // 配置 404 页面的固定写法？
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
]

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
