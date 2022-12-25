<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="collapse"
  >
    <el-menu-item index="1">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <el-icon-menu/>
      </el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps<{
  collapse: boolean
}>()


</script>

<style lang="scss" scoped>
//这个样式是来自官网的一个设置展开宽度的样式
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
