<template>
  <div>
    <x-choose-icon title="选择图标" v-model:visible="visible"></x-choose-icon>
  </div>
</template>

<script setup>
import xChooseIcon from '../../components/chooseIcon/src/index.vue'
import {ref} from 'vue'

let visible = ref(false)



</script>

<style scoped>

</style>
