<template>
  <div class="header">
   <span @click="handleIsCollapseClick">
      <el-icon-expand v-if="collapse" class="trigger"></el-icon-expand>
      <el-icon-fold v-else class="trigger"></el-icon-fold>
   </span>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps<{
  collapse: boolean
}>()

const emits = defineEmits(['update:collapse'])


const handleIsCollapseClick = () => {
  emits('update:collapse', !props.collapse)
  console.log(props.collapse)
}

</script>

<style lang="scss" scoped>

.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  svg{
    width: 1.5em;
    height: 1.5em;
  }
}
</style>
