<template>
    <button class="btn">按钮</button>
</template>

<script>
import { ElButton } from 'element-plus'
export default {
    components: { ElButton },
}
</script>

<style>
.btn {
    @apply bg-purple-500 text-light-100 px-4 py-2 hover:(bg-purple-300);
}
</style>
