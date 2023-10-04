<template>
  <el-container class="bg-white rounder" :style="{height: (h + 'px')}">
      <el-header class="image-header">
          <el-button type="primary" size="default" @click="handleOpenCreate">新增图片分类</el-button>
      </el-header>
      <el-container>
          <ImageAside/>
          <ImageMain/>
      </el-container>
      <FormDrawer ref="fromDrawer" title="新增"></FormDrawer>
  </el-container>
</template>

<script setup>

import ImageAside from "~/components/ImageAside.vue";
import ImageMain from "~/components/ImageMain.vue";
import FormDrawer from "~/components/FormDrawer.vue";
import {ref} from "vue";

const windowHeight = window.innerHeight || document.body.clientHeight;
const h = windowHeight - 64 - 44 - 40

console.log(windowHeight)
const fromDrawer = ref(null)

const handleOpenCreate = () => {
    fromDrawer.value.open()
}

</script>

<style>
.image-header {
    border-bottom: 1px solid #eeeeee;
    @apply flex items-center;
}
</style>
