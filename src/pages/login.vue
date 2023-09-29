<template>
    <el-row class="login-container">
        <el-col :lg="16" class="flex items-center justify-center flex-col">
            <div class="font-bold mb-4 text-light-50 text-5xl">欢迎光临</div>
            <div>后台系统</div>
        </el-col>
        <el-col :lg="8" class="left-col">
            <h2>欢迎回来</h2>
            <div class="space-x-2 my-5 flex items-center justify-center text-gray-300">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>
            <el-form :model="form" :rules="rules" class=" w-[250px]">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名" size="default" >
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" type="password" show-password placeholder="请输入密码" size="default" >
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="" size="default">
                    <el-button type="primary" class="w-[250px] round" @click="onSubmit" loading="loading">登录</el-button>
                </el-form-item>

            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
// setup: 组合时 api
import {reactive, ref} from 'vue'
import {getInfo, login} from '~/api/manager.js'
import { ElNotification } from "element-plus";
import router from "~/router/index.js";
import { useCookies } from '@vueuse/integrations/useCookies'
import {Lock, User} from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
  username:"",
  password:""
})

const rules = reactive({
    username:[{
        require: true,
        message: "不能为空",
        min: 3,
        max: 5,
    }],
    password:[],
})

const loading = ref(false)

const onSubmit = () => {
    console.log('submit!')
    loading.value = true
    login(form.username, form.password)
        .then(res=> {
            console.log(res)
            // 提示成功
            ElNotification({
                message: "登录成功",
                type: 'success',
                duration:3000
            })
            const cookie = useCookies()
            cookie.set('admin-token', res.token)

            getInfo().then(res2=>{
                console.log(res2);
            });

            // router.push("/")
        })
        .catch(err => {
            console.log(err.response.data)
        }).finally(() =>{
            loading.value = false
    })
}
</script>

<style>
.login-container {
    @apply min-h-screen bg-indigo-500;
}
.login-container .left-col {
    @apply bg-light-50 flex items-center justify-center flex-col;
}
</style>
