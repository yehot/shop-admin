<template>
  <el-container class="bg-white rounder" :style="{height: (h + 'px')}">
      <el-header class="image-header">

      </el-header>
      <el-container>
          <ImageAside/>
          <ImageMain/>
      </el-container>
  </el-container>
</template>

<script setup>

import ImageAside from "~/components/ImageAside.vue";
import ImageMain from "~/components/ImageMain.vue";

const windowHeight = window.innerHeight || document.body.clientHeight;
const h = windowHeight - 64 - 44 - 40

console.log(windowHeight)

</script>

<style>
.image-header {
    border-bottom: 1px solid #eeeeee;
    @apply flex items-center;
}
</style>
