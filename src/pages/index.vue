<template>
  <el-row style="min-height:100vh;">
      <el-col :span="16" class="bg-left">
        <el-button type="primary" size="default" @click="add"> {{ count }}</el-button>
        <el-button size="default" @click="addAge"> {{ form.age }}</el-button>
      </el-col>
      <el-col :span="8" class="bg-right">2</el-col>
  </el-row>
</template>

<script setup>
// ref 和 reactive 区别：基础数据类型和
import { ref, reactive } from 'vue'

let count = ref(1)

const form = reactive({
  age: 2
})

function addAge() {
  form.age++;
}

function add() {
  count.value++
  console.log(count.value)
}
</script>

<style>
.bg-left {
    background-color: lightblue;
}
</style>
