 import {
  createRouter,
  createWebHashHistory,
 } from 'vue-router'

 // 1. 定义路由组件（可以是一个页面，也可以是一个 View）
import Index from "~/pages/index.vue"
import About from "~/pages/about.vue"
import NotFound from "~/pages/404.vue"
import Login from "~/pages/login.vue";
import Admin from "~/layout/admin.vue";
import GoodsList from "~/pages/goods/index.vue";
 import CategoryList from "~/pages/category/index.vue";

// 2. 定义一些路由
const routes = [
  {
    path: '/',
    component: Admin,
    name: 'admin',
    meta: {
      title: "后台首页"
    },
  },
  {
    path: '/login',
    component: Login,
    meta:{
      title:"登录页"
    }
  },
  {
    // 配置 404 页面的固定写法？
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound
  }
];

 // 动态路由，用于匹配菜单动态添加路由
 const asyncRoutes = [{
   path:"/",
   name:"/",
   component:Index,
   meta:{
     title:"后台首页"
   }
 },{
   path:"/goods/list",
   name:"/goods/list",
   component:GoodsList,
   meta:{
     title:"商品管理"
   }
 },{
   path:"/category/list",
   name:"/category/list",
   component:CategoryList,
   meta:{
     title:"分类列表"
   }
 }]
// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

 // 动态添加路由的方法
 export function addRoutes(menus){
   // 是否有新的路由
   let hasNewRoutes = false
   const findAndAddRoutesByMenus = (arr) =>{
     arr.forEach(e=>{
       let item = asyncRoutes.find(o=>o.path === e.frontpath)
       if(item && !router.hasRoute(item.path)){
         router.addRoute("admin",item)
         hasNewRoutes = true
       }
       if(e.child && e.child.length > 0){
         findAndAddRoutesByMenus(e.child)
       }
     })
   }

   findAndAddRoutesByMenus(menus)

   return hasNewRoutes
 }
