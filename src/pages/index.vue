<template>
    <div>
        <el-row :gutter="10">
            <template v-if="panels.length === 0">
                <IndexHeaderSk/>
            </template>

            <el-col :span="6" :offset="0" v-for="(item, index) in panels" :key="index">
                <el-card shadow="hover" class="border-0">
                    <template #header>
                        <div class="flex justify-between">
                            <span>{{ item.title }}</span>
                            <el-tag :type="item.unitColor" effect="plain">{{ item.unit }}</el-tag>
                        </div>
                    </template>
                    <span>
                        <CountTo :value="item.value"/>
                    </span>
                    <el-divider/>
                    <div class="flex justify-between">
                        <span>{{ item.subTitle }}</span>
                        <span>{{ item.subValue }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <IndexNavs/>
    </div>
</template>

<script setup>

import {getStatistics1} from "~/api/index.js";
import {ref} from "vue";
import CountTo from "~/components/CountTo.vue";
import IndexHeaderSk from "~/layout/components/IndexHeaderSk.vue";
import IndexNavs from "~/layout/components/IndexNavs.vue";

const panels = ref([])
getStatistics1().then( res=> {
    panels.value = res.panels;
})

</script>

<style>
.bg-left {
    background-color: lightblue;
}
</style>
