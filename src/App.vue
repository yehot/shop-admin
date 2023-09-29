<template>
    <!-- 作用？？ -->
    <router-view></router-view>
</template>

<script>
import { ElButton } from 'element-plus'
export default {
    components: { ElButton },
}
</script>

<style>
// 样式覆盖
#nprogress .bar{
    background-color: #f4f4f4!important;
    height: 3px!important;
}
</style>
