<template>
  <div>
    <el-button @click="btnClick">123</el-button>
    <el-icon-edit></el-icon-edit>
  </div>
</template>

<script lang="ts" setup>
const btnClick = () => {
  console.log('123')
}

</script>

<style scoped>

</style>
