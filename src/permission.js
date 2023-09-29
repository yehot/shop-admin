import router from "~/router"
import {getToken} from "~/composables/auth"
import {hideFullLoading, showFullLoading, showToast} from "~/composables/util"
import store from "~/store/index.js";

// 全局前置守卫
router.beforeEach(async (to,from,next)=>{

    const token = getToken()
    showFullLoading()

    // 没有登录，强制跳转回登录页
    if(!token && to.path !== "/login"){
        showToast("请先登录","error")
        return next({ path:"/login" })
    }

    // 防止重复登录
    if(token && to.path === "/login"){
        showToast("请勿重复登录","error")
        return next({ path:from.path ? from.path : "/" })
    }

    // 如果用户登录了，自动获取用户信息，并存储在vuex当中
    // 每个页面都请求的数据
    if(token){
        await store.dispatch("getInfo")
    }

    // 设置页面标题
    document.title = (to.meta.title ? to.meta.title : "") + "-商城后台"

    next()
})

// 全局后置守卫
router.afterEach((to, from) => hideFullLoading())
