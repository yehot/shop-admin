import { createStore } from 'vuex'
import {getInfo, login} from "~/api/manager.js";
import {setToken} from "~/composables/auth.js";

const store = createStore({
    state() {
        return {
            // 用户信息
            user: {}
        }
    },
    mutations: {
        // 记录用户信息
        SET_USERINFO(state,user){
            state.user = user
        }
    },
    actions: {
        // 登录
        login({ commit }, { username,password }){
            return new Promise((resolve,reject)=>{
                login(username,password).then(res=>{
                    setToken(res.token)
                    resolve(res)
                }).catch(err=>reject(err))
            })
        },
        // 获取当前登录用户信息
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getInfo().then( res => {
                    commit("SET_USERINFO", res)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
})

export default store
